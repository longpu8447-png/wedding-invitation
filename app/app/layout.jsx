export const metadata = {
  title: 'Wedding Invitation',
  description: '婚禮電子喜帖',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
