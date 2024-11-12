import { apiAuthRequest } from "../helpers/apiRequests.js";

/*
 `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(60) COLLATE utf8mb4_0900_as_cs NOT NULL,
  `content` text COLLATE utf8mb4_0900_as_cs,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `published_by` int unsigned NOT NULL,
*/

export async function getPosts() {
  //return apiAuthRequest("/publications");
  setTimeout(() => {
    return [
        {
            'id': 1,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
            
        },
        {
            'id': 2,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
        },
        {
            'id': 3,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
        },
        {
            'id': 4,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
        },
        {
            'id': 5,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
        },
        {
            'id': 6,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
        },
        {
            'id': 7,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
        },
        {
            'id': 8,
            'title': "Hola mundo",
            'content': "Hola",
            'created_at': '01:00:00',
            'updated_at': '02:00:00',
            'published_by': 1
        },
    ]
  }, 1000)
}
