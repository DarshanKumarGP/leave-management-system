const API_BASE = "https://leave-management-api-4p7b.onrender.com/api";

export async function signup(data) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function login(data) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function applyLeave(data, token) {
  const res = await fetch(`${API_BASE}/leaves/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function getMyLeaves(token) {
  const res = await fetch(`${API_BASE}/leaves/my`, {
    headers: {
      Authorization: token,
    },
  });

  return res.json();
}

export async function getAllLeaves(token) {
  const res = await fetch(`${API_BASE}/leaves/all`, {
    headers: {
      Authorization: token,
    },
  });

  return res.json();
}

export async function updateLeave(id, status, token) {
  const res = await fetch(`${API_BASE}/leaves/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ status }),
  });

  return res.json();
}