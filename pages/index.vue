<template>
  <div>
    <slider></slider>

    <div class="content-container">
      <div class="grid-2">
        <div class="col-50" style="background: transparent">
          <h2>
            Kreative Köpfe. <br />
            Inspirierende Räume. <br />
            <span class="highlight">Das Ideenlabor.</span>
          </h2>
        </div>
        <div class="col-50" style="background: transparent">
          <p>
            Tauchen Sie ein in die Welt des Ideenlabors auf dem <a href="https://fabrik-sonntag.de" style="color: #0d2a44; font-weight: bold" target="blank">Fabrik Sonntag</a>
            Campus in Waldkirch. Das Ideenlabor vereint eine dynamische
            Full-Service-Werbeagentur und ein inspirierendes Coworking-Zentrum.
            Die <a href="https://khri8.com" style="color: #0d2a44; font-weight: bold" target="_blank">Ideenlabor-Agentur</a> liefert Ihnen außergewöhnliche
            Markenerlebnisse, innovative Ideen und kreative Umsetzungen. Das
            <a href="https://ideenlabor-coworking.de" style="color: #0d2a44; font-weight: bold" target="_blank">Ideenlabor-Coworking</a> ist der ideale Ort für konzentriertes Arbeiten
            in einem einzigartigen Arbeitsumfeld mit flexiblen Möglichkeiten und
            modern ausgestatteten Meetingräumen.
          </p>
        </div>
      </div>
    </div>

    <div class="content-container">
      <div class="grid-3" style="padding: 20px;">
        <div class="contact-information">
          <h3>Kontaktdaten</h3>
          <div>
            <p><a style="color: #0d2a44" href="https://khri8.com" target="_blank"><strong>Ideenlabor Agentur</strong></a></p>
            <p><a style="color: #0d2a44" href="https://www.google.de/maps/place/Fabrik+Sonntag+2,+79183+Waldkirch/@48.098115,7.9651153,17z/data=!3m1!4b1!4m6!3m5!1s0x47911fded665ae07:0x5747acad2348c975!8m2!3d48.098115!4d7.9676902!16s%2Fg%2F11c43vksxp?entry=ttu" target="_blank">Fabrik Sonntag 2</a></p>
            <p>79183 Waldkirch</p>
            <p>
              <a href="mailto:info@ideenlabor-agentur.de"
                >info@ideenlabor-agentur.de</a
              >
            </p>
          </div>
          <div style="margin-top: 20px">
            <p><a style="color: #0d2a44" href="https://ideenlabor-sonntag.de" target="_blank"><strong>Ideenlabor Coworking</strong></a></p>
            <p><a style="color: #0d2a44" href="https://www.google.de/maps/place/Fabrik+Sonntag+6,+79183+Waldkirch/@48.09836,7.9657751,17z/data=!3m1!4b1!4m6!3m5!1s0x47911fdf25fad1af:0xd3de7435d58821da!8m2!3d48.09836!4d7.96835!16s%2Fg%2F11c5pg5p3n?entry=ttu" target="_blank">Fabrik Sonntag 4, 6</a></p>
            <p>79183 Waldkirch</p>
            <p>
              <a href="mailto:info@ideenlabor-coworking.de"
                >info@ideenlabor-coworking.de</a
              >
            </p>
          </div>
        </div>
        <GMap
          class="map-container"
          ref="gMap"
          language="de"
          :center="mapCenter"
          :options="{
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
          }"
          :zoom="16"
        >
          <GMapMarker :position="marker"></GMapMarker>
        </GMap>
      </div>
    </div>

    <!-- <div class="content-container">
      <h2 style="text-align: center">
        Das ist <span class="highlight">Ideenlabor</span>
      </h2>
      <div class="grid-2">
        <div
          class="col-50"
          style="
            height: 400px;
            background-image: url('ideenlabor-agentur.png');
            background-size: cover;
          "
        >
          <a href="https://khri8.com" class="col-link"> zur Agentur </a>
        </div>
        <div
          class="col-50"
          style="
            height: 400px;
            background-image: url('ideenlabor-coworking.png');
            background-size: cover;
            background-position: center;
          "
        >
          <a href="https://ideenlabor-sonntag.de" class="col-link">
            zum Coworking
          </a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
  head() {
    return {
      title:
        "Ideenlabor Waldkirch | Werbeagentur, Coworking und Eventlocations",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Werbeagentur, Coworking und Eventlocations in Waldkirch",
        },
      ],
    };
  },
  data() {
    return {
      map: null,
      mapCenter: { lat: 48.0983636, lng: 7.9657751 },
      marker: { lat: 48.09840070529074, lng: 7.968327784300982 },
    };
  },
  mounted() {},
};
</script>
