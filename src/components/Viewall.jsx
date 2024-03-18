import React, { useState } from 'react'
import Delete from './Delete'

const Viewall = () => {
    const[data,setData]=new useState(
        [
            {"moviename":"sdd","movieposter":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/941f52133698221.61c36c24decd0.jpg"},
            {"moviename":"sdd","movieposter":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/941f52133698221.61c36c24decd0.jpg"},
            {"moviename":"sdd","movieposter":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/941f52133698221.61c36c24decd0.jpg"},
            {"moviename":"sdd","movieposter":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/941f52133698221.61c36c24decd0.jpg"},
            {"moviename":"sdd","movieposter":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/941f52133698221.61c36c24decd0.jpg"},

        ]
    )
    return (
        <div>
<Delete/>



            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="row g-4">
                            {
                                data.map(
                                    (value,index)=>{
                                        return   
                                   
                                    }
                                )
                                }
                            
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall