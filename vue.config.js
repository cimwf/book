const path = require('path')

function resolve(url){
    return path.resolve(__dirname,url)
}

module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('components',resolve('./src/components'))
        .set('styles',resolve('./src/assets/styles'))
        .set('pages',resolve('./src/pages'))
        .set('scripts',resolve('./src/assets/scripts'))
        .set('utils',resolve('./src/utils'))
    },

    devServer:{
        proxy:{
            '/haha':{
                target:'http://touch.m.dangdang.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/haha':''
                }
            },
            '/h5ajax.php':{
                target:'http://touch.m.dangdang.com',
                changeOrigin:true
            },
            '/search_ajax.php':{
                target:'http://search.m.dangdang.com',
                changeOrigin:true
            },
            '/ddcategory.php':{
                target:'http://search.m.dangdang.com',
                changeOrigin:true
            },
            '/getIndexData':{
                target:'http://z.dangdang.com/api/mina/decoration',
                changeOrigin:true
            },
            '/index.php':{
                target:'http://z.dangdang.com/mapi7',
                changeOrigin:true,
                
            },
            '/api':{
                target:'http://z.dangdang.com',
                changeOrigin:true,
                
            },
            '/cart.php':{
                target:'http://cart.m.dangdang.com',
                changeOrigin:true,
                
            },
            'review.php':{
                target:'http://product.m.dangdang.com',
                changeOrigin:true,
                
            },
            '/search_ajax.php':{
                target:'http://search.m.dangdang.com',
                changeOrigin:true,
                
            },


        }
    }
}