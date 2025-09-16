<script>
    export let members;
</script>

<div class="book">
    <div class="page">
        <div class="front cover">
            <div>
                <h1 class="textLarge">FDND 2E</h1>
                <p>Frontend Design & Development</p>
            </div>
            <p><strong>2025 - 2026.</strong><br />First edition</p>
        </div>
        <div class="back">
            <h2>Welcome</h2>
            <p>Click on the pages to flip through!</p>
        </div>
    </div>
    <div class="page">
        <div class="front">
            <h2>Meet squad 2E</h2>
        </div>
        <div class="back">
            <img src={members[0].avatar} alt="{members[0].name}'s avatar" />
        </div>
    </div>

    {#each members.slice(1) as member, index}
        <div class="page">
            <div class="front">
                <h2>{members[index].name}</h2>
                <p>{members[index].bio}</p>
            </div>
            <div class="back">
                <img src={member.avatar} alt="{member.name}'s avatar" />
            </div>
        </div>
    {/each}
    <div class="page">
        <div class="front">
            <h2>{members[members.length - 1].name}</h2>
            <p>{members[members.length - 1].bio}</p>
        </div>
        <div class="back cover">
            <h3 class="textLarge">That's all, folks</h3>
            <p>End of the flipbook.</p>
        </div>
    </div>
</div>

<style>
    * {
        box-sizing: border-box;
    }

    /* nav */
    nav {
        background-color: var(--color-azure);
        width: 100%;
        height: 4em;
        position: absolute;
        top: 0;
        left: 0;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    li {
        margin: 0.5em;
    }

    /* FlipBook */

    /* body { */
    /* or any other parent wrapper */
    /* margin: 0;
        display: flex;
        min-height: 100dvh;
        perspective: 1600px;
        font:
            1em/1.4 "Poppins",
            sans-serif;
        overflow: hidden;
        color: hsl(180 68% 5%); */
    /*   background-image: radial-gradient(circle farthest-corner at 50% 50%, hsl(187 20% 88%) 30%, hsl(149 20% 94%) 100%); */
    /* } */

    .book {
        position: relative;
        top: 5em;
        display: flex;
        margin: auto;
        width: 40cqmin;
        /*1* let pointer event go trough pages of lower Z than .book */
        pointer-events: none;
        transform-style: preserve-3d;
        transition: translate 1s;
        translate: calc(min(var(--c), 1) * 50%) 0%;
        /* Incline on the X axis for pages preview */
        rotate: 1 0 0 30deg;
    }

    .page {
        /* PS: Don't go below thickness 0.5 or the pages might transpare */
        --thickness: 4;
        flex: none;
        display: flex;
        width: 100%;
        font-size: 2cqmin;
        /*1* allow pointer events on pages */
        pointer-events: all;
        user-select: none;
        transform-style: preserve-3d;
        transform-origin: left center;
        transition:
            transform 1s,
            rotate 1s ease-in
                calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms);
        translate: calc(var(--i) * -100%) 0px 0px;
        transform: translateZ(
            calc(
                (var(--c) - var(--i) - 0.5) * calc(var(--thickness) * 0.23cqmin)
            )
        );
        rotate: 0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg);
    }

    .front,
    .back {
        position: relative;
        flex: none;
        width: 100%;
        backface-visibility: hidden;
        overflow: hidden;
        background-color: #fff;
        /* Fix backface visibility Firefox: */
        translate: 0px;
    }

    .back {
        translate: -100% 0;
        rotate: 0 1 0 180deg;
    }

    /* That's it. Your FlipBook customization styles: */

    .book {
        counter-reset: page -1;
        & a {
            color: inherit;
        }
    }

    .page {
        box-shadow: 0em 0.5em 1em -0.2em #00000020;
    }

    .front,
    .back {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        padding: 2em;
        border: 1px solid #0002;

        &:has(img) {
            /*     padding: 0; */
        }

        & img {
            width: 100%;
            height: 60%;
            object-fit: contain;
        }

        &::after {
            position: absolute;
            bottom: 1em;
            counter-increment: page;
            content: counter(page) ".";
            font-size: 0.8em;
        }
    }
    .cover {
        &::after {
            content: "";
        }
    }
    .front {
        &::after {
            right: 1em;
        }
        background: linear-gradient(to left, #f7f7f7 80%, #eee 100%);
        border-radius: 0.1em 0.5em 0.5em 0.1em;
    }
    .back {
        &::after {
            left: 1em;
        }
        background-image: linear-gradient(to right, #f7f7f7 80%, #eee 100%);
        border-radius: 0.5em 0.1em 0.1em 0.5em;
    }

    .cover {
        color: #050542;
        font-family: sans-serif;
        background:
            radial-gradient(
                circle farthest-corner at 80% 20%,
                hsl(150 80% 20% / 0.3) 0%,
                hsl(170 60% 10% / 0.1) 100%
            ),
            /* var(--color-salmon) 50% / cover; */ var(--color-storm) 50% /
                cover;

        .textLarge {
            font-size: 3em;
            margin-bottom: 0;
        }
    }
</style>
