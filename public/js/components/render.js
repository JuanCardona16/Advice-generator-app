const advice = document.getElementById('advice');

const printData = async (info) => {
  console.table(info)
  const { slip } = info;
  let codeHTML = `
    <p class="title">advice<span>#${slip.id}</span></p>
    <p class="advice">"${slip.advice}"</p>
  `;
  advice.innerHTML = codeHTML;
};

export default printData;