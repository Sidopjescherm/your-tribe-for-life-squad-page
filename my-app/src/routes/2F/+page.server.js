export async function load({ url }) {
    const members2 = await fetch("https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[squads][squad_id][cohort][_eq]=2526&filter[squads][squad_id][tribe][name][_eq]=FDND%20Jaar%202&filter[squads][squad_id][name][_eq]=2F");
    const membersData2 = await members2.json();
    console.log(membersData2);

    return { members2: membersData2.data };
}

