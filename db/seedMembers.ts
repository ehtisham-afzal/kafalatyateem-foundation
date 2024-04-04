// Import necessary modules
import db from './drizzle';
import { members } from './schema';
import { TeamBehind } from '@/lib/Data';

// Function to seed the members table
export async function seedMembers() {
    try {
        // Iterate over the TeamBehind array
        for (const member of TeamBehind) {
            // Insert each member into the members table
            await db.insert(members).values({
                name: member.Name,
                designation: member.Designation,
                groupMember: member.GroupMember,
                cnic: member.CNIC,
                phoneNo: member.PhoneNo,
                address: member.Address,
                imageUrl: member.ImageUrl,
            })
            console.log(1)
        }

        console.log('Members seeded successfully');
    } catch (error) {
        console.error('Error seeding members:', error);
    }
}
