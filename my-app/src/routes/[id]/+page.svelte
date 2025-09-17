<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
    // console.log(data);
    const student = data.student;
</script>

<div id="back">
    <a href="/">Back to flipbook</a>
</div>

<section id="polaroid">
    <article id="photo_n_name">
        {#if student.avatar === null}
          <a href="{student.profilecard}"><img src="src/lib/assets/github_logo.png" alt="Placeholder avatar" width="250px" height="250px"/></a>
        {:else}
          <a href="{student.profilecard}"><img src="{student.avatar}" alt="{student.name}'s avatar" width="250px" height="250px"/></a>
        {/if}
        <h1>{student.name}</h1>
    </article>

    <article id="details">
        <h2>Details</h2>

        <ul>
            <li><a href="https://github.com/{student.github_handle}">{student.github_handle}</a></li>

            <!-- als er geen favoriete kleur is -->
            {#if student.fav_color === null}
                <li>Kleurloos</li>
            <!-- als er wel een favoriete kleur is -->
            {:else}
                <li>{student.fav_color}</li>
            {/if}

            <!-- als er geen geboortedatum is -->
            {#if student.birthdate === null}
                <li>Geboorteloos</li>
            <!-- als er wel een geboortedatum is-->
            {:else}
                <li>{student.birthdate}</li>
            {/if}

            {#if student.fav_animal === null}
                <li>Dierloos</li>
            {:else}
                <li>{student.fav_animal}</li>
            {/if}
        </ul>
    </article>
</section>

<style>
    #back {
        width: 8em;
        height: 2em;
        border-radius: 25px;
        background-color: #66E5BF;
        border: solid #050542;
        margin-bottom: 20px;

        a{
            text-decoration: none;
            color: #050542;
        };

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #polaroid {
        margin: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        
        h1{
            font-size: x-large;
        }
    }

    #photo_n_name {
        background-color: whitesmoke;
        width: 300px;
        height: 400px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #details {
        background-color: whitesmoke;
        width: 300px;

        display: grid;
        grid-template-columns: auto 1fr auto;
    }

    #photo_n_name, #details {
        box-shadow: 7px 7px 5px grey;
    }
</style>