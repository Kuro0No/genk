import axios from 'axios'
import img1 from '../images/1.png'
import img2 from '../images/2.jpg'
import img3 from '../images/3.png'

const fakeDataMobileNews = {
    data: [
        { id: 1, category: "Mobile", title: 'Top điện thoại sinh viên giá rẻ dưới 10m', img: img1, short_des: 'Top điện thoại sinh viên giá rẻ dưới 10m' },
        { id: 2, category: "Mobile", title: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?', img: img2, short_des: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?' },
        { id: 3, category: "Mobile", title: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp', img: img3, short_des: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp' },
        { id: 4, category: "Mobile", title: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?', img: img1, short_des: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?' },
        
    ],
    total: 8,
    category: "Mobile"

}



const fakeDataNotIgnorebleNews = {
    data: [
        { id: 1, category: "Đừng bỏ lỡ", title: 'iPhone 14 series cháy hàng trong ngày đầu mở đặt trước', img: img1, short_des: 'Top điện thoại sinh viên giá rẻ dưới 10m' },
        { id: 2, category: "Đừng bỏ lỡ ", title: 'iPhone 14 chính hãng mở bán sớm tại Việt Nam, giá bản xách tay giảm ngay 10 triệu đồng', img: img2, short_des: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?' },
        { id: 3, category: "Đừng bỏ lỡ ", title: '10 tính năng nổi bật trên iOS 16 mà ai dùng iPhone phải biết ngay', img: img3, short_des: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp' },
        { id: 4, category: "Đừng bỏ lỡ ", title: 'Tìm hiểu về công nghệ ma thuật dùng AI vẽ tranh theo mô tả của con người', img: img1, short_des: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?' },
        
    ],
    total: 8,
    category: "Đừng bỏ lỡ"
}

const fakeDataEmagazineNews = {
    data: [
        { id: 1, category: "Emagazine", title: 'iPhone 14 series cháy hàng trong ngày đầu mở đặt trước', img: img1, short_des: 'Top điện thoại sinh viên giá rẻ dưới 10m' },
        { id: 2, category: "Emagazine", title: 'iPhone 14 chính hãng mở bán sớm tại Việt Nam, giá bản xách tay giảm ngay 10 triệu đồng', img: img2, short_des: 'Đánh giá OPPO Reno8 Pro 5G: Tiềm năng cần được khai phá?' },
        { id: 3, category: "Emagazine", title: '10 tính năng nổi bật trên iOS 16 mà ai dùng iPhone phải biết ngay', img: img3, short_des: 'Đánh giá nhanh ổ cứng SSD NVMe WD_BLACK SN850 dành cho PS5: Vẫn thuộc hàng đầu bảng nhưng được dán thêm logo PlayStation trên hộp' },
        { id: 4, category: "Emagazine", title: 'Tìm hiểu về công nghệ ma thuật dùng AI vẽ tranh theo mô tả của con người', img: img1, short_des: 'Tại sao Toyota không bán được chiếc xe điện nào trong tháng 9?' },
        
        
    ],
    total: 8,
    category: "Emagazine"

}

export default class CategoryNewService {
    static getMobileNewsList(data = {}) {
        return new Promise(resolve => {
            axios.get('/')
                .then((result = {}) => {
                    const { status, data, message } = result
                    if (status === 200) {
                        return resolve({ isSuccess: true, data: fakeDataMobileNews })
                    } else {
                        return resolve({ isSuccess: false, message })
                    }
                })
        })
    }

    static getNotIgnoreNewsList(data = {}) {
        return new Promise(resolve => {
            axios.get('/')
                .then((result = {}) => {
                    const { status, data, message } = result
                    if (status === 200) {
                        return resolve({ isSuccess: true, data: fakeDataNotIgnorebleNews })
                    } else {
                        return resolve({ isSuccess: false, message })
                    }
                })
        })
    }


    static getEmagazineNewsList(data = {}) {
        return new Promise(resolve => {
            axios.get('/')
                .then((result = {}) => {
                    const { status, data, message } = result
                    if (status === 200) {
                        return resolve({ isSuccess: true, data: fakeDataEmagazineNews })
                    } else {
                        return resolve({ isSuccess: false, message })
                    }
                })
        })
    }
}