let allbtn = document.querySelectorAll(".continer .second button");
let parent = document.querySelector(".continer .third");
console.log(parent);
allbtn.forEach((e, index) => {
    e.onclick = function() {

        if (index == 0) {
            let result = `
              <div class="box">
                <div class="image">
                    <img src="img/slider1.jpg" alt="">
                </div>
                <div class="text">
                    <h2>All</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/slider2.jpg" alt="">
                </div>
                <div class="text">
                    <h2>All</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/slider3.jpg" alt="">
                </div>
                <div class="text">
                    <h2>All</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-4.jpg" alt="">
                </div>
                <div class="text">
                    <h2>All</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-5.jpg" alt="">
                </div>
                <div class="text">
                    <h2>All</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-6.jpg" alt="">
                </div>
                <div class="text">
                    <h2>All</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-7 (1).jpg" alt="">
                </div>
                <div class="text">
                    <h2>All</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>



            `
            parent.innerHTML = result;

        } else if (index == 1) {
            let result = `
              <div class="box">
                <div class="image">
                    <img src="img/menu-4.jpg" alt="">
                </div>
                <div class="text">
                    <h2>Break Fast</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-5.jpg" alt="">
                </div>
                <div class="text">
                    <h2>Break Fast</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-6.jpg" alt="">
                </div>
                <div class="text">
                    <h2>Break Fast</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-7 (1).jpg" alt="">
                </div>
                <div class="text">
                    <h2>Break Fast</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>

            `
            parent.innerHTML = result
        } else if (index == 2) {
            let result = `
              <div class="box">
                <div class="image">
                    <img src="img/menu-4.jpg" alt="">
                </div>
                <div class="text">
                    <h2>Lanugh</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-5.jpg" alt="">
                </div>
                <div class="text">
                    <h2>Lanugh</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-6.jpg" alt="">
                </div>
                <div class="text">
                    <h2>Lanugh</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            <div class="box">
                <div class="image">
                    <img src="img/menu-7 (1).jpg" alt="">
                </div>
                <div class="text">
                    <h2>Lanugh</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae autem pariatur exercitationem maxime incidunt nemo cum fugit aut ad?</p>

                </div>
            </div>
            
            
            `
            parent.innerHTML = result;
        }
    }
})