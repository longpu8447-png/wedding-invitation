export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#8b0000',
      color: 'white',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '60px' }}>囍</h1>

      <h2>昊天 & 彥儒</h2>

      <p>2027 / 01 / 17</p>

      <p>新天地梧棲創始店</p>

      <p>午宴</p>

      <div style={{
        background: 'white',
        color: '#8b0000',
        padding: '20px',
        borderRadius: '20px',
        marginTop: '30px'
      }}>
        <h3>RSVP 出席回覆</h3>

        <input
          placeholder="姓名"
          style={{
            width:'100%',
            padding:'10px',
            marginBottom:'10px'
          }}
        />

        <input
          placeholder="電話"
          style={{
            width:'100%',
            padding:'10px',
            marginBottom:'10px'
          }}
        />

        <button style={{
          background:'#8b0000',
          color:'white',
          border:'none',
          padding:'12px 24px',
          borderRadius:'10px'
        }}>
          送出回覆
        </button>
      </div>
    </main>
  );
}
