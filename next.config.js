module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'anon.seongjun.kr' }],
        destination: '/anon',
      },
    ];
  },
};
