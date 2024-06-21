import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi'
import LoadingSpinner from '@/components/LoadingSpinner'
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm'


export const UserProfilePage = () => {
    const {currentUser,isLoading:isGetLoadind}=useGetMyUser()
    const {updateUser , isLoading:isUpdateLoading}=useUpdateMyUser()

if (isGetLoadind) {
    return <LoadingSpinner/>
}

if (!currentUser) {
    return <span>Unable to load user</span>
    
}

  return <UserProfileForm currentUser={currentUser}  onSave={updateUser} isLoading={isUpdateLoading}/>
}
