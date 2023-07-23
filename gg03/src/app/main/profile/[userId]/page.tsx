function Profile({ params }: { params: { userId: string } }) {
  return (
    <div>
      <h1>{params.userId}'s PROFILE</h1>
    </div>
  );
}

export default Profile;
