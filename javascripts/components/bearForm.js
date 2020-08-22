import { buildBearCards } from './river.js';

let bearsArray = [];

const createBearForm = () => {
    $('#bearForm').html(`
    <form>
    <div class="form-group">
      <label for="bear-name">Enter Bear Name</label>
      <input type="text" class="form-control" id="bear-name">
      </div>
    <div class="form-group">
      <label for="bearImageUrl">Enter Image URL</label>
      <input type="url" class="form-control" id="bear-image">
    </div>
    <button type="button" id="submitButton" class="btn btn-primary" >Submit</button>
  </form>`)
};

const submitButtonClick = () => {
   $('#submitButton').click(() => {
       const bearName = $('#bear-name').val();
       const bearImage = $('#bear-image').val();

       bearsArray.push({
           bearName: bearName,
           bearImage: bearImage
       })

       console.log(bearsArray);
       clearOutForm();
       buildBearCards(bearsArray);
   })
};

const clearOutForm = () => {
    $('#bear-name').val('');
    $('#bear-image').val('');
}




export { createBearForm, submitButtonClick }