<template>
  <form action="">
    <div class="input">
      <input type="text" placeholder="Enter text">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"  xmlns="http://www.w3.org/2000/svg">
        <path d="M7.93131 2.05823L5.94173 0.0686826C5.85015 -0.0228942 5.70176 -0.0228942 5.61017 0.0686826L4.55297 1.12587C4.46139 1.21745 4.46139 1.36584 4.55297 1.45743L6.54254 3.44698C6.58833 3.49278 6.64832 3.51568 6.70831 3.51568C6.76829 3.51568 6.82829 3.49278 6.87409 3.44698L7.93129 2.38979C8.0229 2.2982 8.0229 2.14981 7.93131 2.05823Z" fill="#494949"/>
        <path d="M6.21099 3.77864L4.22141 1.7891C4.21991 1.7876 4.21867 1.78593 4.21742 1.78426C4.21624 1.78268 4.21505 1.78109 4.21366 1.77966L1.97082 2.90101C1.91954 2.92666 1.87925 2.97038 1.85793 3.02374L0 7.66844L2.84959 4.81889C2.80571 4.72719 2.77909 4.62581 2.77909 4.51753C2.77909 4.12966 3.09462 3.81412 3.48251 3.81412C3.8704 3.81412 4.18593 4.12965 4.18593 4.51753C4.18593 4.9054 3.8704 5.22094 3.48251 5.22094C3.37423 5.22094 3.27285 5.19432 3.18115 5.15045L0.331562 8L4.97635 6.14212C5.02969 6.12082 5.07344 6.08053 5.09908 6.02923L6.22044 3.78642C6.21902 3.78504 6.21745 3.78386 6.21588 3.78269C6.21419 3.78142 6.2125 3.78016 6.21099 3.77864Z" fill="#494949"/>
        <path d="M3.24804 4.51738C3.24804 4.38802 3.35315 4.28291 3.48251 4.28291C3.61188 4.28291 3.71698 4.38802 3.71698 4.51738C3.71698 4.64673 3.61187 4.75184 3.48251 4.75184C3.35315 4.75184 3.24804 4.64673 3.24804 4.51738Z" fill="#494949"/>
      </svg>
    </div>
  </form>
</template>
<style lang="scss">
  $input-color: #494949;
  $input-color-hover: #708FFF;

  form {
    padding: 40px;
  }
  form .input {
    position: relative;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    width: 216px;
    color: $input-color;

    :hover {
      color: $input-color-hover;
    }

    input {
      font-size: 12px;
      line-height: 14px;
      box-sizing: border-box;
      border-width: 0 0 2px 0;
      border-style: solid;
      border-color: $input-color;
      width: 100%;
      padding-right: 21px;
      transition: all .3s;
    }
    input::placeholder {
      color: $input-color;
      transition: all .3s;
    }

    svg {
      position: absolute;
      right: 0;
      bottom: 5px;
    }

    svg path {
      fill: $input-color;
      transition: all .3s;
    }
    
  }
  form .input:hover input::placeholder {
    color: $input-color-hover;
  }
  form .input:hover svg path {
    fill: $input-color-hover;
  }
</style>
