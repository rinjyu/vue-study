const target = 'http://127.0.0.1:3000';

module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    },
    devServer: {
        port: 8000,
        proxy: {
            '^api': {
                target,
                changeOrigin: true
            }
        }
    }
}