import React from 'react'
import './menu.scss'
import taiAppstore from '../../../images/tai-appstore123.png'
import taiAndroid from '../../../images/tai-android.png'

const Menu = ({openMenu}) => {
    return (
        <div className={`menu-container ${openMenu ? 'd-flex' : 'd-none'}`}>
            <div className='grid'>
                <ul> <li className='bold d-flex justify-content-between underline'>Mobile <label className='icon-next'> &gt;</label></li>
                    <li className='my-2'>Điện thoại</li>
                    <li className='my-2'>Máy tính bảng</li>
                </ul>
            </div>
            <div className='grid'>
                <ul> 
                    <li className='bold d-flex justify-content-between underline'>Internet <label className='icon-next'> &gt;</label></li>
                    <li className='my-2'>Digital marketing</li>
                    <li className='my-2'>Media</li>
                </ul>
            </div>
            <div className='grid'>
                <ul>
                    <li className='bold d-flex justify-content-between underline'>Khám phá <label className='icon-next'> &gt;</label></li>
                    <li className='my-2'>Lịch sử</li>
                    <li className='my-2'>Tri thức</li>
                </ul>
            </div>
            <div className='grid'>
                <ul>
                    <li className='bold d-flex justify-content-between underline'>Trà đá công nghệ <label className='icon-next'> &gt;</label></li>
                    <li className='my-2'>Tản mạn</li>
                    <li className='my-2'>Ý tưởng sáng tạo</li>
                </ul>
            </div>
            <div className='grid'>
                <ul>
                    <li className='bold d-flex justify-content-between underline'>Blockchain  <label className='icon-next'> &gt;</label></li>
                    <li className='my-2'>Xu hướng</li>
                    <li className='my-2'>Công nghệ</li>
                    <li className='my-2'>Nhân vật</li>
                </ul>
            </div>
            <div className='grid'>
                <ul>

                    <li className='bold d-flex justify-content-between underline'>  Tin ICT <label className='icon-next'> &gt;</label>  </li>
                    <li className='bold d-flex justify-content-between underline'>  Thủ thuật <label className='icon-next'> &gt;</label>  </li>
                    <li className='bold d-flex justify-content-between underline'>  Sống <label className='icon-next'> &gt;</label>  </li>
                    <li className='bold d-flex justify-content-between underline'>  Emagazine <label className='icon-next'> &gt;</label>  </li>

                </ul>
            </div>
            <div className='grid'>
                <ul>

                    <li className='bold d-flex justify-content-between underline'> Apps - Games <label className='icon-next'> &gt;</label>  </li>
                    <li className='bold d-flex justify-content-between underline'> Đồ chơi số <label className='icon-next'> &gt;</label>  </li>
                    <li className='bold d-flex justify-content-between underline'> Video <label className='icon-next'> &gt;</label>  </li>
                    <li className='bold d-flex justify-content-between underline'> Gia dụng <label className='icon-next'> &gt;</label>  </li>

                </ul>
            </div>
            <div>
                <img style={{cursor:'pointer'}} src={taiAppstore} />
                <img style={{cursor:'pointer'}} src={taiAndroid} />
            </div>
        </div>
    )
}

export default Menu