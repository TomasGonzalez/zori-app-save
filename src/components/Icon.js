import React from "react";

const ICONS = {
  chat: {
    paths: [
      "M7.43.727H1.055C.47.727 0 1.198 0 1.782V6c0 .583.471 1.054 1.055 1.054h.351V8.11c0 .254.263.438.52.31.008-.008.022-.008.029-.015 1.934-1.297 1.5-1.008 1.933-1.294.057-.035.12-.056.19-.056H7.43c.583 0 1.054-.47 1.054-1.054V1.78c0-.583-.47-1.054-1.054-1.054zM4.617 4.946h-2.86c-.463 0-.465-.703 0-.703h2.86c.464 0 .466.703 0 .703zm2.11-1.406h-4.97c-.463 0-.465-.704 0-.704h4.97c.463 0 .465.704 0 .704z",
      "M10.945 3.54H9.187V6c0 .97-.787 1.758-1.757 1.758H4.184l-.668.443v.612c0 .584.47 1.055 1.054 1.055h3.457l2.018 1.35c.276.153.549-.033.549-.296V9.868h.351c.584 0 1.055-.471 1.055-1.055V4.594c0-.583-.471-1.054-1.055-1.054z",
    ],
  },
  checkMark: {
    paths: [
      "M15.766 2.36c-.313-.313-.82-.313-1.132 0L5.05 11.943 1.366 8.26c-.313-.313-.82-.313-1.132 0-.312.312-.312.819 0 1.131l4.25 4.25c.312.312.82.312 1.132 0l10.15-10.15c.312-.313.312-.82 0-1.132z",
    ],
  },
  dashboard: {
    paths: [
      "M4.625 0H.875C.392 0 0 .392 0 .875v2.25C0 3.608.392 4 .875 4h3.75c.483 0 .875-.392.875-.875V.875C5.5.392 5.108 0 4.625 0zM4.625 5H.875C.392 5 0 5.392 0 5.875v5.25c0 .482.392.875.875.875h3.75c.483 0 .875-.393.875-.875v-5.25C5.5 5.392 5.108 5 4.625 5zM11.125 8h-3.75c-.483 0-.875.392-.875.875v2.25c0 .482.392.875.875.875h3.75c.482 0 .875-.393.875-.875v-2.25c0-.483-.393-.875-.875-.875zM11.125 0h-3.75C6.892 0 6.5.392 6.5.875v5.25c0 .483.392.875.875.875h3.75c.482 0 .875-.392.875-.875V.875C12 .392 11.607 0 11.125 0z",
    ],
  },
  distributed: {
    paths: [
      "M8.46 4.945H7.056V7.02l-.703-.445V3.54h1.406V0H4.242v3.54h1.406v3.034l-.703.445V4.945H3.54V3.54H0v3.516h3.54V5.648h.702v1.816l-.351.223L6 9.093l2.11-1.406-.352-.223V5.648h.703v1.407H12V3.539H8.46v1.406zM5.649 1.43h.704v.703h-.704V1.43zM2.133 5.648H1.43v-.703h.703v.703zm7.734-.703h.703v.703h-.703v-.703zM6.352 9.704V12l2.109-1.406V8.297L6.35 9.704zM3.54 8.297v2.297L5.647 12V9.704L3.54 8.297z",
    ],
  },
  information: {
    paths: [
      "M6 0C2.692 0 0 2.692 0 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6zm1 9.75c0 .138-.112.25-.25.25h-1.5C5.112 10 5 9.888 5 9.75V6h-.25c-.138 0-.25-.112-.25-.25v-1c0-.138.112-.25.25-.25h2c.138 0 .25.112.25.25v5zM6 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z",
    ],
  },
  listText: {
    paths: [
      "M10.5 1.874H3.004c-.414 0-.75.336-.75.75s.336.75.75.75h7.498c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM1.504 2.624c-.001-.198-.08-.389-.222-.529-.292-.29-.764-.29-1.057 0-.14.14-.22.33-.22.53-.006.048-.006.097 0 .145.008.05.022.097.04.143.02.044.044.087.072.127.027.042.058.081.093.116.034.034.072.065.113.09.04.03.082.053.127.072.05.025.103.044.158.056.048.005.097.005.146 0 .198 0 .388-.078.528-.218.036-.035.067-.074.094-.116.027-.04.051-.083.071-.127.024-.046.043-.093.057-.143.005-.048.005-.097 0-.146zM1.504 5.998c.005-.049.005-.098 0-.146-.013-.049-.032-.095-.057-.139-.019-.046-.043-.09-.07-.131-.027-.042-.058-.08-.095-.113-.292-.29-.764-.29-1.057 0-.14.14-.22.33-.22.529 0 .099.02.196.055.289.02.044.042.087.068.127.028.04.061.078.097.112.033.037.071.068.113.094.04.029.082.053.127.071.046.02.094.033.143.042.048.01.097.015.146.015.048.005.098.005.146 0 .048-.009.094-.022.139-.042.046-.018.09-.042.131-.07.042-.027.08-.058.112-.095.037-.033.068-.07.094-.112.029-.04.053-.082.071-.127.026-.05.045-.103.057-.158.005-.048.005-.098 0-.146zM1.504 9.372c.005-.049.005-.098 0-.146-.013-.05-.032-.098-.057-.143-.02-.044-.044-.087-.07-.127-.027-.042-.058-.08-.095-.113-.292-.29-.764-.29-1.057 0-.036.033-.067.071-.093.113-.028.04-.051.083-.072.127-.019.046-.033.094-.04.143-.011.048-.016.097-.016.146.001.198.08.388.221.528.033.036.071.068.113.094.04.029.082.053.127.071.046.02.094.033.143.041.048.011.097.016.146.015.049.006.098.006.146 0 .048-.008.094-.022.139-.04.046-.02.09-.043.131-.072.042-.026.08-.058.113-.094.036-.033.067-.07.093-.112.03-.04.053-.082.071-.128.026-.05.045-.102.057-.157.005-.049.005-.098 0-.146zM11.25 5.248H3.003c-.414 0-.75.336-.75.75s.336.75.75.75h8.247c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM7.876 8.622H3.003c-.414 0-.75.336-.75.75s.336.75.75.75h4.873c.415 0 .75-.336.75-.75s-.335-.75-.75-.75z",
    ],
  },
  megaphone: {
    paths: [
      "M6 7.538V2.962c-.13.012-.258.032-.389.038H1.875c-.207 0-.375.168-.375.375v.375H.375c-.207 0-.375.168-.375.375v2.25c0 .207.168.375.375.375H1.5v.375c0 .207.168.375.375.375h.227l1.508 4.018c.092.24.298.415.552.466.05.01.1.016.15.016.2 0 .39-.08.527-.222l.9-.893c.23-.23.286-.59.139-.868L4.619 7.5h.996c.13.006.257.026.385.038zM11.938.181c-.007-.012-.014-.023-.024-.035-.041-.052-.093-.095-.157-.12-.002 0-.003-.004-.006-.004-.007-.003-.014.001-.021-.001-.034-.01-.068-.021-.105-.021-.026 0-.048.01-.073.015-.014.003-.028.004-.042.008-.065.021-.12.057-.164.107-.003.003-.008.003-.01.006-1.17 1.42-2.8 2.37-4.586 2.718v4.793c1.786.348 3.416 1.296 4.585 2.716.003.004.008.005.012.01.027.029.059.052.093.072.011.006.02.016.032.021.047.02.098.033.153.033.042 0 .084-.007.126-.021.003-.001.004-.004.006-.005.064-.025.116-.067.157-.12.01-.012.016-.022.024-.035.036-.058.062-.122.062-.194V.375c0-.072-.026-.136-.062-.194z",
    ],
  },
  myBusiness: {
    paths: [
      "M10.764 7.204c-.656 0-1.237-.328-1.588-.828-.351.5-.932.828-1.588.828S6.35 6.876 6 6.376c-.351.5-.932.828-1.588.828s-1.237-.328-1.588-.828c-.35.5-.932.828-1.588.828-.185 0-.363-.027-.533-.075v4.177h10.594V7.129c-.17.048-.348.075-.533.075zM8.803.694l.668 3.824h2.385L10.521.694H8.803zM6.352 4.518h2.405L8.09.694H6.352v3.824zM5.648 4.518V.694H3.91l-.668 3.824h2.406zM2.529 4.518L3.196.694H1.48L.144 4.518h2.385zM1.236 6.5c.682 0 1.237-.554 1.237-1.235V5.22H0v.044C0 5.946.555 6.5 1.236 6.5z",
      "M5.648 5.265V5.22H3.176v.044c0 .681.554 1.236 1.236 1.236.682 0 1.236-.555 1.236-1.236zM8.824 5.265V5.22H6.352v.044c0 .681.554 1.236 1.236 1.236.682 0 1.236-.555 1.236-1.236zM10.764 6.5C11.445 6.5 12 5.947 12 5.266V5.22H9.527v.044c0 .681.555 1.236 1.237 1.236z",
    ],
  },
  preference: {
    paths: [
      "M11.813 5.25c-.097-.06-.854-.514-1.155-.652l-.372-.9c.11-.297.322-1.132.355-1.276.03-.134-.01-.275-.107-.372l-.583-.583c-.097-.097-.238-.138-.372-.107-.11.025-.966.24-1.277.355l-.9-.372C7.271 1.055 6.831.316 6.751.188 6.678.072 6.55.001 6.412.001h-.824c-.138 0-.266.07-.339.187-.06.097-.514.854-.652 1.155l-.9.372c-.297-.11-1.132-.322-1.276-.355-.134-.03-.275.01-.372.107l-.583.583c-.097.097-.138.238-.107.372.025.11.24.966.355 1.277l-.372.9C1.054 4.73.315 5.17.187 5.25.071 5.323 0 5.451 0 5.59v.824c0 .138.07.266.187.339.097.06.854.514 1.155.651l.372.9c-.11.298-.322 1.133-.355 1.277-.03.134.01.275.107.372l.583.583c.097.097.238.138.372.107.11-.025.966-.24 1.277-.355l.9.372c.131.288.571 1.027.651 1.155.073.116.201.187.339.187h.824c.138 0 .266-.07.339-.187.06-.097.514-.854.652-1.155l.9-.372c.297.11 1.132.322 1.276.355.134.03.275-.01.372-.107l.583-.583c.097-.097.138-.238.107-.372-.025-.11-.24-.966-.355-1.277l.373-.9c.287-.131 1.026-.571 1.154-.651.116-.073.187-.201.187-.339V5.59c0-.138-.07-.266-.187-.339zM6 8.617C4.558 8.617 3.384 7.443 3.384 6c0-1.442 1.174-2.616 2.616-2.616 1.442 0 2.616 1.174 2.616 2.616 0 1.442-1.174 2.616-2.616 2.616z",
    ],
  },
  shoppingBag: {
    paths: [
      "M10.752 9.896l-.536-6.753c-.034-.435-.402-.776-.838-.776H8.32v1.569c0 .194-.158.351-.352.351-.194 0-.351-.157-.351-.351V2.367H4.383v1.569c0 .194-.157.351-.351.351-.194 0-.351-.157-.351-.351V2.367H2.622c-.436 0-.804.341-.838.775l-.536 6.755c-.041.54.147 1.079.515 1.477.369.397.891.626 1.433.626h5.608c.542 0 1.064-.229 1.433-.626.368-.398.556-.937.514-1.478zm-3.169-3.44L5.766 8.275c-.069.07-.159.104-.249.104s-.18-.035-.248-.104l-.852-.851c-.138-.138-.138-.36 0-.497.137-.138.36-.138.497 0l.603.603 1.57-1.57c.137-.136.36-.136.496 0 .138.138.138.36 0 .498zM6 0C4.721 0 3.68 1.04 3.68 2.32v.047h.704V2.32c0-.892.725-1.617 1.616-1.617.892 0 1.617.725 1.617 1.617v.047h.703V2.32C8.32 1.04 7.28 0 6 0z",
    ],
  },
  statistics: {
    paths: [
      "M1.781 5.625c.284 0 .54-.114.73-.297l1.041.52c-.005.043-.013.085-.013.129 0 .581.473 1.054 1.055 1.054.581 0 1.054-.473 1.054-1.054 0-.163-.04-.315-.105-.452l1.411-1.412c.138.066.29.106.452.106.582 0 1.055-.473 1.055-1.055 0-.11-.022-.213-.053-.312l1.227-.92c.167.112.368.177.584.177.581 0 1.054-.473 1.054-1.054C11.273.473 10.8 0 10.22 0c-.582 0-1.055.473-1.055 1.055 0 .11.022.213.053.312l-1.227.92c-.167-.112-.368-.178-.584-.178-.581 0-1.054.474-1.054 1.055 0 .162.04.314.105.452L5.046 5.028c-.138-.066-.29-.106-.452-.106-.284 0-.54.114-.73.296l-1.041-.52c.005-.042.013-.084.013-.128 0-.581-.473-1.054-1.055-1.054-.581 0-1.054.473-1.054 1.054 0 .582.473 1.055 1.054 1.055z",
      "M11.648 11.297h-.375v-7.43c0-.194-.157-.351-.351-.351H9.516c-.195 0-.352.157-.352.351v7.43h-.703v-5.32c0-.195-.157-.352-.352-.352H6.703c-.194 0-.351.157-.351.352v5.32h-.704V8.789c0-.194-.157-.351-.351-.351H3.89c-.195 0-.352.157-.352.351v2.508h-.703V7.383c0-.194-.157-.352-.352-.352H1.078c-.194 0-.351.158-.351.352v3.914H.352c-.195 0-.352.157-.352.351 0 .195.157.352.352.352h11.296c.195 0 .352-.157.352-.352 0-.194-.157-.351-.352-.351z",
    ],
  },
  museum: {
    paths: [
      "M9.291 6.29h1.406v3.366H9.291V6.29zM6.628 6.29h1.407v3.366H6.628V6.29zM3.965 6.29h1.407v3.366H3.965V6.29zM1.303 6.29h1.406v3.366H1.303V6.29zM11.166 5.235v-.352H.834v.352c0 .194.157.351.352.351h9.629c.194 0 .351-.157.351-.351zM11.648 10.36H.352c-.194 0-.352.157-.352.35v.938c0 .195.158.352.352.352h11.296c.195 0 .352-.157.352-.352v-.937c0-.194-.157-.352-.352-.352zM.352 4.18h11.297c.157 0 .295-.105.338-.256.043-.151-.02-.313-.154-.395L6.184.052c-.112-.07-.255-.07-.368 0L.167 3.53c-.133.082-.196.244-.153.395.042.151.18.256.338.256zm5.41-2.112h.477c.194 0 .352.157.352.351 0 .195-.158.352-.352.352h-.478c-.194 0-.351-.157-.351-.352 0-.194.157-.351.351-.351z",
    ],
  },
  bell: {
    paths: [
      "M19.51 30c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.1-2.1-5.6-5-6.3v-.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v.7c-2.9.7-5 3.2-5 6.3V24l-2 2v1h17v-1l-2-2z",
    ],
  },
  menu: {
    paths: [
      "M18.889 1.094H1.111C.499 1.094 0 1.593 0 2.204v2.223c0 .612.499 1.111 1.111 1.111h17.778c.612 0 1.111-.499 1.111-1.11V2.204c0-.612-.499-1.111-1.111-1.111zM18.889 7.76H1.111C.499 7.76 0 8.26 0 8.871v2.223c0 .612.499 1.11 1.111 1.11h17.778c.612 0 1.111-.498 1.111-1.11V8.87c0-.612-.499-1.11-1.111-1.11zM18.889 14.427H1.111c-.612 0-1.111.499-1.111 1.111v2.222c0 .613.499 1.111 1.111 1.111h17.778c.612 0 1.111-.498 1.111-1.11v-2.223c0-.612-.499-1.11-1.111-1.11z",
    ],
  },
  notification: {
    paths: [
      "M7.235 18.196C7.705 19.257 8.767 20 10 20s2.296-.743 2.765-1.804h-5.53zM10 1.91c.814 0 1.595.144 2.32.407v-.089C12.32.999 11.32 0 10.092 0h-.184C8.679 0 7.68 1 7.68 2.228v.088c.725-.262 1.506-.405 2.32-.405zM17.323 17.022H2.677c-.277 0-.531-.187-.589-.458-.057-.268.065-.533.313-.648.06-.038.503-.348.946-1.286.815-1.722.986-4.147.986-5.879 0-3.125 2.542-5.666 5.667-5.666 3.117 0 5.654 2.53 5.666 5.643v.023c0 1.732.172 4.157.987 5.88.443.937.887 1.247.946 1.285.248.115.37.38.313.648-.058.271-.311.458-.589.458zm.282-1.102z",
    ],
  },
  search: {
    paths: [
      "M19.756 18.577l-5.688-5.687c1.102-1.36 1.765-3.09 1.765-4.973C15.833 3.552 12.281 0 7.917 0 3.552 0 0 3.552 0 7.917s3.552 7.916 7.917 7.916c1.883 0 3.612-.663 4.973-1.765l5.687 5.688c.163.162.376.244.59.244.213 0 .426-.082.589-.244.325-.326.325-.853 0-1.179zm-11.84-4.41c-3.446 0-6.25-2.804-6.25-6.25 0-3.447 2.804-6.25 6.25-6.25 3.447 0 6.25 2.803 6.25 6.25 0 3.446-2.803 6.25-6.25 6.25z",
    ],
  },
  photo: {
    viewBox: "0 0 16 16",
    paths: [
      "M15.724 1.655H.276c-.152 0-.276.124-.276.276V14.07c0 .153.124.276.276.276h15.448c.152 0 .276-.123.276-.276V1.931c0-.152-.124-.276-.276-.276zm-.276 12.138H.552V2.207h14.896v11.586z",
      "M4.414 7.762c.847 0 1.536-.689 1.536-1.536 0-.847-.689-1.536-1.536-1.536-.847 0-1.536.689-1.536 1.536 0 .847.689 1.536 1.536 1.536zm0-2.52c.543 0 .985.442.985.984 0 .543-.442.985-.985.985-.543 0-.984-.442-.984-.985 0-.542.441-.984.984-.984zM1.931 12.69c.065 0 .13-.023.182-.069l4.5-3.962 2.842 2.842c.108.108.283.108.39 0 .108-.108.108-.282 0-.39L8.52 9.785l2.533-2.774L14.16 9.86c.112.103.286.095.39-.017.102-.112.095-.287-.018-.39l-3.31-3.034c-.054-.05-.126-.074-.199-.073-.073.004-.142.036-.191.09l-2.702 2.96-1.308-1.31c-.104-.102-.268-.107-.378-.011L1.75 12.207c-.115.1-.126.275-.025.39.055.061.13.093.207.093z",
    ],
  },
  videoCamera: {
    viewBox: "0 0 16 16",
    paths: [
      "M15.834 3.848c-.103-.06-.23-.063-.336-.006l-3.67 2.005V4.644c-.002-.936-.76-1.694-1.696-1.695H1.695C.759 2.95 0 3.71 0 4.644v6.692c.001.936.76 1.694 1.695 1.695h8.437c.936 0 1.694-.759 1.695-1.695v-1.18l3.671 2.004c.106.057.233.055.336-.006.103-.061.166-.172.166-.291V4.14c0-.12-.063-.23-.166-.292zm-4.685 7.489c0 .561-.455 1.016-1.017 1.017H1.695c-.562-.001-1.016-.456-1.017-1.018V4.644c0-.561.455-1.016 1.017-1.017h8.437c.562 0 1.017.456 1.017 1.017v6.692zm4.173-.046l-3.495-1.908V6.62l3.495-1.908v6.58z",
    ],
  },
  writing: {
    viewBox: "0 0 16 16",
    paths: [
      "M12.668 12.633c-.11-.069-.254-.036-.323.073-.586.922-1.587 1.473-2.677 1.473H3.636C1.89 14.18.47 12.76.47 11.011V5.394c0-.129-.105-.234-.235-.234-.129 0-.234.105-.234.234v5.617c0 2.006 1.631 3.637 3.636 3.637h6.032c1.252 0 2.4-.632 3.072-1.691.07-.11.037-.254-.072-.324zm-2.06-6.228L8.82 8.192c-.092.092-.092.24 0 .332.045.046.105.069.165.069.06 0 .12-.023.166-.07l1.787-1.786c.091-.092.091-.24 0-.332-.091-.091-.24-.091-.332 0zM15.66 2.5l-.817-.817c-.452-.452-1.188-.452-1.64 0l-.848.848c-.69-.757-1.655-1.187-2.688-1.187H3.636c-.836 0-1.653.29-2.3.82C.7 2.683.254 3.411.082 4.212c-.027.126.054.251.18.278.017.004.033.006.05.006.108 0 .205-.076.228-.186.15-.697.539-1.33 1.094-1.785.563-.46 1.275-.713 2.003-.713h6.032c.907 0 1.755.38 2.356 1.05L9.53 5.356H2.996c-.13 0-.235.105-.235.234 0 .13.105.235.235.235h6.067L7.939 6.948H2.996c-.13 0-.235.105-.235.235s.105.234.235.234H7.47L6.016 8.871c-.42.421-.766.907-1.024 1.444L4.325 11.7c-.185.383-.11.826.191 1.127.192.191.44.291.695.291.145 0 .293-.033.432-.1l.673-.323.713-.344c.537-.258 1.023-.603 1.444-1.024l4.362-4.362v4.045c0 .257-.03.512-.091.76-.03.125.046.252.172.283.019.004.037.006.056.006.105 0 .201-.071.227-.178.07-.283.105-.576.105-.87V6.496l.652-.651L15.66 4.14c.452-.453.452-1.188 0-1.64zM5.44 12.597c-.245.118-.467.025-.593-.1-.126-.127-.218-.348-.1-.593l.197-.41c.165.131.325.274.478.427.153.153.296.313.428.478l-.41.198zm1.385-.667l-.542.261c-.161-.209-.338-.41-.53-.601-.19-.191-.392-.369-.6-.53l.26-.542c.18-.374.407-.72.675-1.035l1.772 1.773c-.314.268-.66.494-1.035.674zm1.377-.995L6.41 9.14l5.256-5.255 1.794 1.794-5.256 5.255zm5.587-5.587l-1.794-1.794.579-.578 1.794 1.794-.579.578zm1.54-1.539l-.63.63-1.794-1.795.63-.63c.134-.134.31-.201.488-.201.177 0 .354.067.489.202l.816.817c.27.27.27.708 0 .977zm-12.334.423h7.313c.129 0 .234-.105.234-.234 0-.13-.105-.235-.234-.235H2.996c-.13 0-.235.105-.235.235s.105.234.235.234z",
    ],
  },
  contract: {
    viewBox: "0 0 16 16",
    paths: [
      "M14.313.777H3.967c-.898 0-1.629.724-1.629 1.61l-.067 9.111H.252c-.143 0-.252.127-.252.27v1.253c0 1.174.94 2.134 2.073 2.187v.015h8.712v-.017c.065.002.104.017.149.017h.006c1.21-.007 2.184-.993 2.177-2.202V5.053h2.63c.144 0 .253-.13.253-.273v-2.3c.002-.935-.752-1.696-1.687-1.703zM2.186 14.705h-.002c-.921 0-1.666-.762-1.666-1.684v-1.005h8.227v1c-.002.584.228 1.144.64 1.557.044.044.09.067.136.131H2.186zM12.6 13.02c0 .922-.737 1.683-1.66 1.683h-.005c-.926-.006-1.673-.76-1.67-1.687v-1.25c0-.144-.115-.264-.26-.269H2.79l.066-9.109c0-.602.498-1.093 1.11-1.093h9.123c-.295.323-.49.733-.49 1.19v10.535zm2.883-10.537v2.05h-2.365V2.486c0-.648.54-1.19 1.188-1.19h.007c.65.006 1.173.536 1.17 1.186v.002z",
      "M6.084 7.155l1.336.914c.088.06.203.06.29 0l1.332-.913c.462-.316.804-.976.804-1.536V3.772c.003-.097-.05-.188-.138-.232l-2.034-1c-.071-.036-.155-.036-.226 0l-2.03.997c-.088.044-.141.135-.139.233v1.85c0 .56.343 1.22.805 1.535zm-.286-3.224l1.765-.87 1.765.873V5.62c0 .39-.256.887-.579 1.107l-1.19.814-1.184-.814c-.323-.22-.577-.716-.577-1.107V3.931z",
      "M7.124 6.011c.049.05.115.078.184.078.07 0 .135-.028.183-.077l1.031-1.03c.102-.102.102-.266 0-.367-.1-.102-.265-.102-.366 0l-.847.846-.338-.342c-.101-.101-.265-.102-.367-.001-.102.1-.102.265-.002.366l.522.527zM10.785 8.81H4.567c-.143 0-.26.116-.26.259 0 .143.117.259.26.259h6.218c.143 0 .26-.116.26-.26 0-.142-.117-.258-.26-.258zM10.785 10.008H4.567c-.143 0-.26.116-.26.26 0 .143.117.258.26.258h6.218c.143 0 .26-.115.26-.259 0-.143-.117-.259-.26-.259z",
    ],
  },
};

function Icon({
  style,
  color = "#999999",
  size = 20,
  icon,
  width,
  height,
  viewBox,
  transform,
  onClick,
  className,
  transitionDuration,
}) {
  return (
    <svg
      className={className}
      height={`${height || size}px`}
      style={style}
      transform={transform}
      viewBox={viewBox || ICONS[icon].viewBox || "0 0 12 12"}
      width={`${width || size}px`}
      onClick={onClick}
    >
      {ICONS[icon].paths.map((path, i) => (
        <path
          key={i} // eslint-disable-line
          d={path}
          style={{
            fill: color,
            transitionDuration: transitionDuration || "0.4s",
          }}
        />
      ))}
    </svg>
  );
}

export default Icon;
