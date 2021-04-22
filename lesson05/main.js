
function createDesk() {
    const chess = document.getElementById('chess');

    const desk = `<div class="vertical-block">
    <div class="square-white">

    </div>
    <div class="square-white">
        1
    </div>
    <div class="square-white">
        2
    </div>
    <div class="square-white">
        3
    </div>
    <div class="square-white">
        4
    </div>
    <div class="square-white">
        5
    </div>
    <div class="square-white">
        6
    </div>
    <div class="square-white">
        7
    </div>
    <div class="square-white">
        8
    </div>
    <div class="square-white">

    </div>
</div>
<div class="main-block">
    <div class="horisontal-block">
        <div class="square-white">
            a
        </div>
        <div class="square-white">
            b
        </div>
        <div class="square-white">
            c
        </div>
        <div class="square-white">
            d
        </div>
        <div class="square-white">
            i
        </div>
        <div class="square-white">
            f
        </div>
        <div class="square-white">
            g
        </div>
        <div class="square-white">
            h
        </div>
    </div>
    <div class="horisontal-block">
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
        <div class="square-white"></div>
        <div class="square-black"></div>
    </div>
    <div class="horisontal-block">
        <div class="square-white">
            a
        </div>
        <div class="square-white">
            b
        </div>
        <div class="square-white">
            c
        </div>
        <div class="square-white">
            d
        </div>
        <div class="square-white">
            i
        </div>
        <div class="square-white">
            f
        </div>
        <div class="square-white">
            g
        </div>
        <div class="square-white">
            h
        </div>
    </div>
</div>
<div class="vertical-block">
    <div class="square-white">

    </div>
    <div class="square-white">
        1
    </div>
    <div class="square-white">
        2
    </div>
    <div class="square-white">
        3
    </div>
    <div class="square-white">
        4
    </div>
    <div class="square-white">
        5
    </div>
    <div class="square-white">
        6
    </div>
    <div class="square-white">
        7
    </div>
    <div class="square-white">
        8
    </div>
    <div class="square-white">

    </div>
</div>`

    chess.insertAdjacentHTML('beforeend', desk)

}

createDesk()