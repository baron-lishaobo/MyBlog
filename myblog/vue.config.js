module.exports = {

    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'commom': '@/commom',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'

            }
        }
    },
    publicPath: process.env.NODE_ENV === "production" ? "/blog/" : "/",

}