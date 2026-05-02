# Stage 1

## Notification APIs

### Create Notification

POST /notifications

Request:

```json
{
  "title": "Placement Alert",
  "message": "Amazon hiring now",
  "recipientId": "student123"
}
```

Response:

```json
{
  "id": "uuid",
  "status": "sent"
}
```

---

### Get Notifications

GET /notifications

Response:

```json
[
  {
    "id": "uuid",
    "title": "Placement Alert",
    "message": "Amazon hiring now",
    "isRead": false
  }
]
```

---

### Update Notification

PATCH /notifications/:id

Request:

```json
{
  "isRead": true
}
```

Response:

```json
{
  "message": "updated"
}
```

---

### Delete Notification

DELETE /notifications/:id

Response:

```json
{
  "message": "deleted"
}
```

---

## Headers

Authorization: Bearer token
Content-Type: application/json