const simple = document.getElementById('simple')
const options = document.getElementById('options')
const promis = document.getElementById('promis')
const advanced = document.getElementById('advanced')
const ajaxReq = document.getElementById('ajaxReq')

simple.addEventListener('click', function () {
  swal("Хорошая работа!", "Ты нажал на кнопку!", "success");
})

options.addEventListener('click', function () {
  swal({
    title: "Good job!",
    text: "Ты нажал на кнопку!",
    icon: "success",
    button: "Закрыть"
  })
})

promis.addEventListener('click', function () {
  swal({
    title: "Вы уверены?",
    text: "Удаленный файл нельзя будет восттановить!",
    icon: "warning",
    buttons: true,
    dangerMode: true
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Ваш файл был успешно удален навсегда!!!", {
        icon: "success",
      });
    } else {
      swal("Ваш файл НЕ удален!");
    }
  })
})

advanced.addEventListener('click', function () {
  swal("A wild Pikachu appeared! What do you want to do?", {
    buttons: {
      cancel: "Run away!",
      catch: {
        text: "Throw Pokéball!",
        value: "catch",
      },
      defeat: true,
    },
  })
  .then((value) => {
    switch (value) {
   
      case "defeat":
        swal("Pikachu fainted! You gained 500 XP!");
        break;
   
      case "catch":
        swal("Gotcha!", "Pikachu was caught!", "success");
        break;
   
      default:
        swal("Got away safely!");
    }
  })
})

ajaxReq.addEventListener('click', function () {
  swal({
    text: 'Найти фильм. e.g. "La La Land".',
    content: "input",
    button: {
      text: "Поиск!",
      closeModal: false,
    },
  })
  .then(name => {
    if (!name) throw null;
   
    return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
  })
  .then(results => {
    return results.json();
  })
  .then(json => {
    const movie = json.results[0];
   
    if (!movie) {
      return swal("Фильм с таким названием не найден!");
    }
   
    const name = movie.trackName;
    const imageURL = movie.artworkUrl100;
   
    swal({
      title: "Результат:",
      text: name,
      icon: imageURL,
    });
  })
  .catch(err => {
    if (err) {
      swal("Очень жаль!", "Запрос отклонен!", "error");
    } else {
      swal.stopLoading();
      swal.close();
    }
  })
})