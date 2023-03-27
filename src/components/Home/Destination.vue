<template>
    <div class="Destination mt-5">
        <!-- Title -->
        <DestinationTitle />
        <!-- Content -->
        <div class="content d-flex flex-column gap-5">
            <DestinationSection 
                imageUrl="../../../public/Home/sec1.png"
                imageAlt="Africa"
                title="Africa"
                paragraph="Africa is the world's second largest and second most-populos continent. At about 30.3 million km including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.2 billion people as of 2016, it accounts for about 16% of the world's human population."
                book="Book Now"
             />
            <DestinationSection 
                imageUrl="../../../public/Home/sec2.png"
                imageAlt="Australia"
                title="Australia"
                paragraph="Australia is a country and continent surrounded by the Indian and Pacific oceans. Its capital, Canberra, is inland. The country is known for its Sydney Opera House, the Great Barrier Reef, a vast interior desert wilderness called the Outback, and and unique animal species."
                book="Book Now"
             />
            <DestinationSection 
                imageUrl="../../../public/Home/sec3.png"
                imageAlt="South America"
                title="South America"
                paragraph="South America is a country and continent in the Western Hemisphere, mostly in the Southern Hemisphere , with a relatively small porttion in the Northern Hemisphere. It may also be considered a subcontinent of the American population, which is how it is viewed in the Spanish and Portuguese-speaking regions of the Americas."
                book="Book Now"
             />
        </div>
    </div>
</template>

<script>
import DestinationTitle from "./DestinationTitle.vue";
import DestinationSection from "./DestinationSection.vue";

export default{
    components:{
        DestinationTitle,
        DestinationSection
    }
}
</script>