exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('badges').del(),

    // Inserts seed entries
    knex('badges').insert([
      {'id': 1, 'category': 1, 'name': 'Road Builder', 'level': 1, 'created_at': new Date()},
      {'id': 2, 'category': 1, 'name': 'Road Builder', 'level': 2, 'created_at': new Date()},
      {'id': 3, 'category': 1, 'name': 'Road Builder', 'level': 3, 'created_at': new Date()},
      {'id': 4, 'category': 2, 'name': 'Road Maintainer', 'level': 1, 'created_at': new Date()},
      {'id': 5, 'category': 2, 'name': 'Road Maintainer', 'level': 2, 'created_at': new Date()},
      {'id': 6, 'category': 2, 'name': 'Road Maintainer', 'level': 3, 'created_at': new Date()},
      {'id': 7, 'category': 3, 'name': 'Point Creator', 'level': 1, 'created_at': new Date()},
      {'id': 8, 'category': 3, 'name': 'Point Creator', 'level': 2, 'created_at': new Date()},
      {'id': 9, 'category': 3, 'name': 'Point Creator', 'level': 3, 'created_at': new Date()},
      {'id': 10, 'category': 4, 'name': 'Building Builder', 'level': 1, 'created_at': new Date()},
      {'id': 11, 'category': 4, 'name': 'Building Builder', 'level': 2, 'created_at': new Date()},
      {'id': 12, 'category': 4, 'name': 'Building Builder', 'level': 3, 'created_at': new Date()},
      {'id': 13, 'category': 5, 'name': 'GPS Trace Creator', 'level': 1, 'created_at': new Date()},
      {'id': 14, 'category': 5, 'name': 'GPS Trace Creator', 'level': 2, 'created_at': new Date()},
      {'id': 15, 'category': 5, 'name': 'GPS Trace Creator', 'level': 3, 'created_at': new Date()},
      {'id': 16, 'category': 6, 'name': 'Long & Winding Road', 'level': 1, 'created_at': new Date()},
      {'id': 17, 'category': 6, 'name': 'Long & Winding Road', 'level': 2, 'created_at': new Date()},
      {'id': 18, 'category': 6, 'name': 'Long & Winding Road', 'level': 3, 'created_at': new Date()},
      {'id': 19, 'category': 7, 'name': 'Long & Winding Road Maintainer', 'level': 1, 'created_at': new Date()},
      {'id': 20, 'category': 7, 'name': 'Long & Winding Road Maintainer', 'level': 2, 'created_at': new Date()},
      {'id': 21, 'category': 7, 'name': 'Long & Winding Road Maintainer', 'level': 3, 'created_at': new Date()},
      {'id': 22, 'category': 8, 'name': 'Waterway Creator', 'level': 1, 'created_at': new Date()},
      {'id': 23, 'category': 8, 'name': 'Waterway Creator', 'level': 2, 'created_at': new Date()},
      {'id': 24, 'category': 8, 'name': 'Waterway Creator', 'level': 3, 'created_at': new Date()},
      {'id': 25, 'category': 9, 'name': 'World Renown', 'level': 1, 'created_at': new Date()},
      {'id': 26, 'category': 9, 'name': 'World Renown', 'level': 2, 'created_at': new Date()},
      {'id': 27, 'category': 9, 'name': 'World Renown', 'level': 3, 'created_at': new Date()},
      {'id': 28, 'category': 10, 'name': 'Task Champion', 'level': 1, 'created_at': new Date()},
      {'id': 29, 'category': 10, 'name': 'Task Champion', 'level': 2, 'created_at': new Date()},
      {'id': 30, 'category': 10, 'name': 'Task Champion', 'level': 3, 'created_at': new Date()},
      {'id': 31, 'category': 11, 'name': 'Scrutinizer', 'level': 1, 'created_at': new Date()},
      {'id': 32, 'category': 11, 'name': 'Scrutinizer', 'level': 2, 'created_at': new Date()},
      {'id': 33, 'category': 11, 'name': 'Scrutinizer', 'level': 3, 'created_at': new Date()},
      {'id': 34, 'category': 12, 'name': 'JOSM User', 'level': 1, 'created_at': new Date()},
      {'id': 35, 'category': 12, 'name': 'JOSM User', 'level': 2, 'created_at': new Date()},
      {'id': 36, 'category': 12, 'name': 'JOSM User', 'level': 3, 'created_at': new Date()},
      {'id': 37, 'category': 13, 'name': 'Mapathoner', 'level': 1, 'created_at': new Date()},
      {'id': 38, 'category': 13, 'name': 'Mapathoner', 'level': 2, 'created_at': new Date()},
      {'id': 39, 'category': 13, 'name': 'Mapathoner', 'level': 3, 'created_at': new Date()},
      {'id': 40, 'category': 14, 'name': 'Consistency', 'level': 1, 'created_at': new Date()},
      {'id': 41, 'category': 14, 'name': 'Consistency', 'level': 2, 'created_at': new Date()},
      {'id': 42, 'category': 14, 'name': 'Consistency', 'level': 3, 'created_at': new Date()},
      {'id': 43, 'category': 15, 'name': 'Year-long Mapper', 'level': 1, 'created_at': new Date()},
      {'id': 44, 'category': 15, 'name': 'Year-long Mapper', 'level': 2, 'created_at': new Date()},
      {'id': 45, 'category': 15, 'name': 'Year-long Mapper', 'level': 3, 'created_at': new Date()},
      {'id': 46, 'category': 16, 'name': 'High Standards', 'level': 1, 'created_at': new Date()},
      {'id': 47, 'category': 16, 'name': 'High Standards', 'level': 2, 'created_at': new Date()},
      {'id': 48, 'category': 16, 'name': 'High Standards', 'level': 3, 'created_at': new Date()}
    ])
  );
};
