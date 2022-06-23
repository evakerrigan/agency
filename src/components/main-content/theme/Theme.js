const dataThems = [
  { theme : "SOFA", img : "sofa.jpg", type : "Design"},
  { theme : "KeyBoard", img : "keyboard.jpg", type : "Branding"},
  { theme : "Work Media", img : "work-media.jpg", type : "Illustration"},
  { theme : "DDDone", img : "dddone.jpg", type : "Motion"},
  { theme : "Abstract", img : "abstract.jpg", type : "Design"},
  { theme : "HandP", img : "handp.jpg", type : "Branding"},
  { theme : "Architect", img : "architect.jpg", type : "Motion"},
  { theme : "Calc", img : "calc.jpg", type : "Design"},
  { theme : "Sport", img : "sport.jpg", type : "Branding"}
]


const Theme = () => {

  return (

    /*<div className="simplediv">
      {*/
        //dataThems.map((element) => <img src={require(`../../../assets/image/${element.img}`)} alt="" />)

        dataThems.map((element) => {

          return (

            <li className="portfolio-theme-item" style={{ backgroundImage: `url(${require(`../../../assets/image/${element.img}`)}`}} key={element.theme.toString()}>

            <button className="portfolio-theme-button">{element.type}</button>

            <h3 className="portfolio-theme-title">{element.theme}</h3>

          </li>

          )

        })

      /*}
    </div>*/

    )
  }

// слушатель клика по элементу
  let imageOnPage = document.querySelectorAll(".portfolio-theme-item");
  let items = imageOnPage;
  
  for (let item of items) {
    item.addEventListener('click', function() {
       if (item.classList.contains('active')) {
          item.classList.remove('active');
       } else {
          item.classList.add('active');
       }
    })
 }
 
 //слушатель клика по клавиатуре, в ожидании клавиши Del
  document.addEventListener('keydown', downKey );
  function downKey(e) {

    let codeKey = e.code;

    if (codeKey === 'Delete') {

      let displayNone = document.querySelectorAll(".active");
      displayNone.classList.add('display-none');

    }

  }
  
  export default Theme