var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
              test: /\.eot(\?v=\d+.\d+.\d+)?$/,
              use: ['file-loader']
            },
            {
              test: /\.(jpe?g|png|gif|ico|jpg)$/i,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }
                }
              ]
            },
            {
                test: /(\.css|\.scss|\.sass)$/
                , include: [
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(__dirname, 'src/styles')
                ],
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  }, {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [
                        require('autoprefixer')
                      ],
                      sourceMap: true
                    }
                  }, {
                    loader: 'sass-loader',
                    options: {
                      includePaths: [path.resolve(__dirname, 'src', 'scss')],
                      sourceMap: true
                    }
                  }
                ]
              }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}