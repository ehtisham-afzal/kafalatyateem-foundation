import { getExectiveBodyMembersData } from '@/actions/actions'
import React from 'react'
import PersonCard from './Cards/PersonCard'

const HomeScreenEBodyMembers = async () => {
    const TeamBehind = await getExectiveBodyMembersData(4)
  return (
    <>
    {TeamBehind.map(
          (member, index) =>
            index < 4 && (
              <PersonCard
                className={index === 3 ? "md:hidden lg:flex" : ""}
                key={member.id}
                Name={member.name}
                Description={member.designation}
                ImageURL={member.imageUrl}
              />
            )
        )}

    </>
  )
}

export default HomeScreenEBodyMembers