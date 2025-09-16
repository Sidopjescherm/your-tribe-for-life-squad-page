<script>
    let hovered = "";
</script>

<div class="center-container">
    <nav class="pill-nav" on:mouseleave={() => (hovered = "")}>
        <a
            href="/"
            class="nav-link left"
            class:hidden={hovered === "right"}
            class:hovered={hovered === "left"}
            on:mouseenter={() => (hovered = "left")}
        >
            2E
        </a>
        <a
            href="/2F"
            class="nav-link right"
            class:hidden={hovered === "left"}
            class:hovered={hovered === "right"}
            on:mouseenter={() => (hovered = "right")}
        >
            2F
        </a>

        <div
            class="hover-overlay-left"
            class:visible={hovered === "left"}
        ></div>

        <div
            class="hover-overlay-right"
            class:visible={hovered === "right"}
        ></div>
    </nav>
</div>

<style>
    :root {
        --color-primary: #007bff;
        --color-secondary: #dc3545;
        --color-light: #fff;
        --pill-width: 18em;
        --pill-height: 4.5em;
    }

    .center-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12vh;
        width: 100vw;
        opacity: 0;
        animation: header-fadeIn 0.7s ease-in-out forwards;
    }

    @keyframes header-fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes text-fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .pill-nav {
        position: relative;
        display: flex;
        width: var(--pill-width);
        height: var(--pill-height);
        background: linear-gradient(
            to right,
            var(--color-primary) 50%,
            var(--color-secondary) 50%
        );
        border-radius: calc(var(--pill-height) / 2);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .nav-link {
        position: relative;
        z-index: 2;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-weight: bold;
        color: var(--color-light);
        transition: all 0.3s ease-in-out;
        opacity: 0;
        animation: text-fadeIn 0.5s ease-in-out 0.4s forwards;
        font-size: 1.5em;
    }

    /* Fixed: Added !important to the opacity to override the animation */
    .pill-nav .nav-link.hidden {
        opacity: 0 !important;
        pointer-events: none;
        transform: scale(0.8);
    }

    .pill-nav .nav-link.hovered {
        flex: 2;
        font-size: 1.8em;
    }

    .hover-overlay-left {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: var(--color-primary);
        transition: width 0.3s ease-in-out;
    }

    .hover-overlay-right {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        width: 0;
        height: 100%;
        background-color: var(--color-secondary);
        transition: width 0.3s ease-in-out;
    }

    .hover-overlay-left.visible,
    .hover-overlay-right.visible {
        width: 100%;
    }
</style>
