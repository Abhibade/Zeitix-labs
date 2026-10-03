"""Backend tests for Zeitix Labs inquiries API."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://zeitix-real.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "message" in r.json()


def test_create_inquiry_success(client):
    payload = {
        "name": "TEST_Alice",
        "email": "test_alice@example.com",
        "company": "TEST_Co",
        "interest": "Games",
        "message": "TEST message for pytest",
    }
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["company"] == payload["company"]
    assert data["interest"] == payload["interest"]
    assert data["message"] == payload["message"]
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data


def test_create_inquiry_minimal(client):
    payload = {"name": "TEST_Bob", "email": "test_bob@example.com", "message": "hi"}
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["company"] is None
    assert data["interest"] is None


def test_create_inquiry_invalid_email(client):
    payload = {"name": "TEST_X", "email": "not-an-email", "message": "hi"}
    r = client.post(f"{API}/inquiries", json=payload)
    assert r.status_code == 422


def test_create_inquiry_missing_required(client):
    r = client.post(f"{API}/inquiries", json={"email": "a@b.com"})
    assert r.status_code == 422


def test_get_inquiries_sorted(client):
    # create two inquiries
    for i in range(2):
        client.post(f"{API}/inquiries", json={
            "name": f"TEST_Sort_{i}", "email": f"sort{i}@example.com", "message": f"m{i}"
        })
    r = client.get(f"{API}/inquiries")
    assert r.status_code == 200
    inquiries = r.json()
    assert isinstance(inquiries, list)
    assert len(inquiries) >= 2
    # verify sorted desc by created_at
    times = [x["created_at"] for x in inquiries]
    assert times == sorted(times, reverse=True)
    # no mongo _id leaking
    for inq in inquiries:
        assert "_id" not in inq
