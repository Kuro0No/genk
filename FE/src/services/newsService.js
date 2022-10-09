import axios from 'axios'
import img1 from '../images/1.png'
import img2 from '../images/2.jpg'
import img3 from '../images/3.png'

const fakeDataTopNews = {
    data: [
        { id: 1, title: 'Top điện thoại sinh viên giá rẻ dưới 10m', img: img1, short_des: 'Top điện thoại sinh viên giá rẻ dưới 10m' },
        { id: 2, title: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?', img: img2, short_des: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?' },
        { id: 3, title: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp', img: img3, short_des: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp' },
        { id: 4, title: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?', img: img1, short_des: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?' },
        { id: 5, title: 'Do Kwon sắp mất hộ chiếu Hàn Quốc, bị đóng băng gần 70 triệu USD tài sản', img: img2, short_des: 'Do Kwon sắp mất hộ chiếu Hàn Quốc, bị đóng băng gần 70 triệu USD tài sản' },
        { id: 6, title: 'Mở hộp OPPO Reno8 Pro 5G: Hướng tới nhiếp ảnh với camera 50MP và chip MariSilicon X, sạc siêu nhanh SuperVOOC 80W', img: img3, short_des: 'Mở hộp OPPO Reno8 Pro 5G: Hướng tới nhiếp ảnh với camera 50MP và chip MariSilicon X, sạc siêu nhanh SuperVOOC 80W' },
        { id: 7, title: 'Tạm biệt cổng sạc Lightning: Châu Âu vừa thông qua quy định buộc dùng cổng USB-C trên mọi thiết bị vào năm 2024', img: img1, short_des: 'Tạm biệt cổng sạc Lightning: Châu Âu vừa thông qua quy định buộc dùng cổng USB-C trên mọi thiết bị vào năm 2024' },
        { id: 8, title: 'Trải nghiệm bàn phím không dây HyperWork HyperONE KB1 và KB2: Mỏng và nhẹ, sử dụng được đa nền tảng', img: img2, short_des: 'Trải nghiệm bàn phím không dây HyperWork HyperONE KB1 và KB2: Mỏng và nhẹ, sử dụng được đa nền tảng' },
    ],
    total: 8
}



const fakeDataRemarkableNews = {
    data: [
        { id: 1, category: "Mobile", title: 'iPhone 14 series cháy hàng trong ngày đầu mở đặt trước', img: img1, short_des: 'Top điện thoại sinh viên giá rẻ dưới 10m' },
        { id: 2, category: "Xem - Mua - Luôn", title: 'iPhone 14 chính hãng mở bán sớm tại Việt Nam, giá bản xách tay giảm ngay 10 triệu đồng', img: img2, short_des: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?' },
        { id: 3, category: "Mobile", title: '10 tính năng nổi bật trên iOS 16 mà ai dùng iPhone phải biết ngay', img: img3, short_des: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp' },
        { id: 4, category: "Khám phá", title: 'Tìm hiểu về công nghệ ma thuật dùng AI vẽ tranh theo mô tả của con người', img: img1, short_des: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?' },
        
    ],
    total: 8
}

const fakeDataBellowRemarkableNews = {
    data: [
        { id: 1, category: "Mobile", title: 'iPhone 14 series cháy hàng trong ngày đầu mở đặt trước', img: img1, short_des: 'Top điện thoại sinh viên giá rẻ dưới 10m' },
        { id: 2, category: "Xem - Mua - Luôn", title: 'iPhone 14 chính hãng mở bán sớm tại Việt Nam, giá bản xách tay giảm ngay 10 triệu đồng', img: img2, short_des: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?' },
        { id: 3, category: "Mobile", title: '10 tính năng nổi bật trên iOS 16 mà ai dùng iPhone phải biết ngay', img: img3, short_des: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp' },
        { id: 4, category: "Khám phá", title: 'Tìm hiểu về công nghệ ma thuật dùng AI vẽ tranh theo mô tả của con người', img: img1, short_des: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?' },
        { id: 5, category: "Khám phá", title: 'Tìm hiểu về công nghệ ma thuật dùng AI vẽ tranh theo mô tả của con người', img: img1, short_des: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?' },
        
        
    ],
    total: 8
}

export default class CustomerService {
    static getTopNewsList(data = {}) {
        return new Promise(resolve => {
            axios.get('/')
                .then((result = {}) => {
                    const { status, data, message } = result
                    if (status === 200) {
                        return resolve({ isSuccess: true, data: fakeDataTopNews })
                    } else {
                        return resolve({ isSuccess: false, message })
                    }
                })
        })
    }

    static getRemarkableNewsList(data = {}) {
        return new Promise(resolve => {
            axios.get('/')
                .then((result = {}) => {
                    const { status, data, message } = result
                    if (status === 200) {
                        return resolve({ isSuccess: true, data: fakeDataRemarkableNews })
                    } else {
                        return resolve({ isSuccess: false, message })
                    }
                })
        })
    }


    static getBellowRemarkableNewsList(data = {}) {
        return new Promise(resolve => {
            axios.get('/')
                .then((result = {}) => {
                    const { status, data, message } = result
                    if (status === 200) {
                        return resolve({ isSuccess: true, data: fakeDataBellowRemarkableNews })
                    } else {
                        return resolve({ isSuccess: false, message })
                    }
                })
        })
    }
}