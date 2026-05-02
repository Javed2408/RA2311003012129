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

# Stage 2

## Database Choice

PostgreSQL

## Why PostgreSQL?

- ACID compliant
- Reliable
- Supports indexing
- Handles relational data well

## Schema

Table: notifications

```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY,
    studentID VARCHAR(100),
    title TEXT,
    message TEXT,
    isRead BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Scaling Problems

As data grows:

- slower reads
- slower writes
- expensive sorting

## Solution

- indexing
- partitioning
- caching