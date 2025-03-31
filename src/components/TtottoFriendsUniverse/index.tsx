import { profiles } from '@/lib/constants/profiles';
import { vars } from '@/styles/theme.css';

const TtottoFriendsUniverse = () => {
  return (
    <main style={{ padding: '40px 20px', maxWidth: '960px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>또또와 친구들</h1>
      <p style={{ fontSize: '16px', color: vars.colors.darkCharcoal, marginBottom: '32px' }}>
        heyB를 함께 만들어가는 12간지 캐릭터들을 소개합니다!
        <br />
        모두 다른 취미를 가지고 있지만, 함께일 때 더 즐겁답니다 🐣
      </p>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
        {profiles.map((profile) => (
          <li key={profile.id} style={{ textAlign: 'center' }}>
            <img
              src={profile.imageUrl}
              alt={profile.name}
              style={{ width: '100%', maxWidth: '180px', aspectRatio: '1', objectFit: 'contain', margin: '0 auto' }}
            />
            <h2 style={{ fontSize: '18px', marginTop: '12px', marginBottom: '4px' }}>{profile.name}</h2>
            <p style={{ fontSize: '14px', color: vars.colors.darkCharcoal, marginBottom: '6px' }}>
              {profile.description}
            </p>
            {profile.quote && <small style={{ fontSize: '13px', color: vars.colors.charcoal }}>{profile.quote}</small>}
            <div style={{ marginTop: '8px' }}>
              {profile.item?.map((keyword) => (
                <span
                  key={keyword}
                  style={{
                    display: 'inline-block',
                    padding: '2px 6px',
                    fontSize: '12px',
                    background: vars.colors.background,
                    borderRadius: '4px',
                    margin: '2px',
                  }}
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TtottoFriendsUniverse;
