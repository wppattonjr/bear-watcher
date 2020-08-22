const buildBearCards = (array) => {
    $('#cardsOfBears').html('');
    array.forEach((bears) => {
        $('#cardsOfBears').append(
        `<div class="card" style="width: 18rem;">
        <img src="${bears.bearImage}" class="card-img-top" alt="image of bear">
        <div class="card-body">
        <h3>${bears.bearName}</h3>
      </div>
    </div>`
    )});
}

export { buildBearCards };