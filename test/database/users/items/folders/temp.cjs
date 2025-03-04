// Import Firebase Admin SDK
const admin = require('firebase-admin');

// Replace this path with the actual path to your service account key file
const serviceAccount = require('../../../../../serviceAccountKey.json');

// Initialize the app with admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://assemblies-86001-default-rtdb.firebaseio.com"
});

// Get a database reference
const db = admin.database();

/**
 * Updates all items with parent_id "root" to empty string
 */
async function updateParentIds() {
  try {
    console.log('Starting database update...');
    
    // Get all users from the database
    const usersSnapshot = await db.ref('users').once('value');
    
    if (!usersSnapshot.exists()) {
      console.log('No users found in the database.');
      return;
    }
    
    const users = usersSnapshot.val();
    const updates = {};
    let updateCount = 0;
    
    // Loop through all users
    for (const userId in users) {
      const items = users[userId]?.items;
      
      // Check if user has items
      if (!items) continue;
      
      // Loop through all items for this user
      for (const itemId in items) {
        const item = items[itemId];
        
        // Check if the item has parent_id set to "root"
        if (item.parent_id === 'root') {
          updates[`users/${userId}/items/${itemId}/parent_id`] = '';
          updateCount++;
          console.log(`Found item to update: users/${userId}/items/${itemId}`);
        }
      }
    }
    
    // Apply all updates in a single batch operation
    if (updateCount > 0) {
      console.log(`Updating ${updateCount} items...`);
      await db.ref().update(updates);
      console.log(`Successfully updated ${updateCount} items with parent_id "root" to empty string.`);
    } else {
      console.log('No items found with parent_id "root".');
    }
  } catch (error) {
    console.error('Error updating parent_ids:', error);
    console.error(error.stack);
  }
}

// Execute the function
updateParentIds()
  .then(() => {
    console.log('Operation completed.');
    process.exit(0);
  })
  .catch(error => {
    console.error('Operation failed:', error);
    process.exit(1);
  });