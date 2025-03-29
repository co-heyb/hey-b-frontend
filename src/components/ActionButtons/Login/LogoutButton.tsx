import Button from '@/components/Button';
import api from '@/lib/api';
import store from '@/stores';

const LogoutButton = () => {
  const handleLogout = async () => {
    await api.auth.logout();
    store.auth.useAuthStore.getState().logout();
    window.location.href = '/login';
  };

  return (
    <Button onClick={handleLogout} size="medium" wide colorFill="mint">
      로그아웃
    </Button>
  );
};
export default LogoutButton;
