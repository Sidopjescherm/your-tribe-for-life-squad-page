<script>
    let { data } = $props();
    // console.log(data);
    const members2 = data.members2;
    import Book2F from "$lib/components/Book2F.svelte";
    import { onMount } from "svelte";

    // The function is defined here
    const flipBook = (elBook) => {
        elBook.style.setProperty("--c", 0);
        elBook.querySelectorAll(".page").forEach((page, idx) => {
            page.style.setProperty("--i", idx);
            page.addEventListener("click", (evt) => {
                if (evt.target.closest("a")) return;
                const curr = evt.target.closest(".back") ? idx : idx + 1;
                elBook.style.setProperty("--c", curr);
            });
        });
    };

    // This code runs only after the component is mounted to the DOM
    onMount(() => {
        document.querySelectorAll(".book").forEach(flipBook);
    });
</script>

<Book2F {members2} />
