import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AvatarImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  margin-left: 30px;
`;

const RobotAvatar = () => {
  return (
    <Container data-testid="container">
      <AvatarImage src="/robot_avatar.png" alt="Robot Avatar" data-testid="avatar-image" />
    </Container>
  );
};

export default RobotAvatar;
