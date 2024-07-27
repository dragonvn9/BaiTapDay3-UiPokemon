import React from 'react'
import { useState } from 'react';
import './film.css'
import Modal from './Modal';

import img01 from '../../assets/images/aoashi_card 1.png';
import img02 from '../../assets/images/attackontitan 1.png';
import img03 from '../../assets/images/boruto-naruto-next-generations 1.png';
import img04 from '../../assets/images/captsu_card 1.png';
import img05 from '../../assets/images/One-piece 1.png';
import img06 from '../../assets/images/spy_card 1.png';

const data = [
  {
    id: "1",
    movieName: "Weather With You",
    description: "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
    image: img01,
    episode: "Episode : 01"
},
{
    id: "2",
    movieName: "Once Peace",
    description: "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
    image: img02,
    episode: "Episode : 1018"
},
{
    id: "3",
    movieName: "Naruto Next Generations",
    description: "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
    image: img03,
    episode: "Episode : 250"
},
{
    id: "4",
    movieName: "Spy X Family",
    description: "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
    image: img04,
    episode: "Episode : 07"
},
{
    id: "5",
    movieName: "Shingeki no kyojin",
    description: "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
    image: img05,
    episode: "Episode : 28"
},
{
    id: "6",
    movieName: "Captain Tsubasa",
    description: "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
    image: img06,
    episode: "Episode : 28"
},

];


function Film() {

  const [clickModal, setClickModal] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(null);

  const openModal = (info) => {
    setClickModal(true);
    setShowModalInfo(info);
  };
  const closeModal = () => {
    setClickModal(false);
    setShowModalInfo(null);
  };


  
  return (
    <div className="container-body">
      <div className="new-release">New Release</div>
      <div className="container-card-film">
      {clickModal && <Modal info={showModalInfo} close={closeModal} />}
        {data.map(film=>(<div onClick = { ()=> openModal(film)} className="card-film">
          <img src= {film.image} alt="" className="cover-photo-film" />
          <div className="linear-gradient"></div>
          <div className="episode">{film.episode}</div>
          <div className="movie-name">{film.movieName}</div>

        </div>))}

      </div>

    </div>

    
  )
}

export default Film