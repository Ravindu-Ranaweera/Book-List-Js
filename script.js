//create a book blass
class Book{
	constructor(title,author,isbn,country){
		this.title=title;
		this.author=author;
		this.isbn=isbn;
		this.country=country;
	}
}
//create UI class
class UI{
	// static displayBook(){
	// 	const storedBook=[
	// 	{
	// 		title:'book1',author:'fvd',isbn:'324354',country:'england'
	// 	},
	// 	{
	// 		title:'book2',author:'tetdcv',isbn:'56542121',country:'india'
	// 	}
	// 	];

	// 	const books = storedBook;
		
	// 	books.forEach((book) => UI.addBookToList(book));

	// }
		
			static addBookToList(book){
				const list= document.querySelector('#book-list');
				const row= document.createElement('tr');

				row.innerHTML =`
				<td>${book.title}</td>
				<td>${book.author}</td>
				<td>${book.isbn}</td>
				<td>${book.country}</td>
				<td><a href="#" class="btn"><i class="fa fa-times icon delete" aria-hidden="true"></i></a></td>
				`;

				list.appendChild(row);

			}

			static deleteBook(el){
					if (el.classList.contains('delete')) {
						el.parentElement.parentElement.parentElement.remove();
					}
			}

			static showAlert(massage, num){
				if (num===0) {
					const div =document.createElement('div');
					div.className=`alert`;
					div.style.backgroundColor= '#ff4400';
					div.appendChild(document.createTextNode(massage));
					const container= document.querySelector('.container');
					const form = document.querySelector('#book-form');
					container.insertBefore(div,form);

				}else{
					const div =document.createElement('div');
					div.className=`alert`;
					div.style.backgroundColor= '#4CAF50';
					div.appendChild(document.createTextNode(massage));
					const container= document.querySelector('.container');
					const form = document.querySelector('#book-form');
					container.insertBefore(div,form);
				}
				

				setTimeout(()=> document.querySelector('.alert').remove(),2000);

			}
			static deleteFields(el){
				if (el.classList.contains('Ititle')) {
					document.querySelector('#title').value = '';
				}
				else if (el.classList.contains('Iauthor')) {
					document.querySelector('#author').value = '';
				}
				else if (el.classList.contains('Iisbn')) {
					document.querySelector('#isbn').value = '';
				}
			}
			static clearFields(){
				document.querySelector('#title').value = '';
				document.querySelector('#author').value = '';
				document.querySelector('#isbn').value = '';
				document.querySelector('#country').value = '';
			}
			

}

// document.addEventListener('DOMContentLoaded',UI.displayBook);

document.getElementById('btn').addEventListener('click',function(e)
{
	e.preventDefault();
	const title=document.querySelector('#title').value;
	const author=document.querySelector('#author').value;
	const isbn=document.querySelector('#isbn').value;
	const country=document.querySelector('#country').value;

	if (title=== ''|| author===''|| isbn===''|| country==='') {
		UI.showAlert('fill all the fields', 0);
	}else{
		const book = new Book(title, author, isbn, country);
	
		UI.addBookToList(book);
		UI.showAlert('Your details Sucessfully Added',1);
		UI.clearFields();

	}
	
});

document.querySelector('#book-list').addEventListener('click', function (e)
 {		
 		UI.deleteBook(e.target);
 		UI.showAlert('Removed Book <Sucessfully></Sucessfully>',1);
});

document.querySelector('#book-form').addEventListener('click', function (e)
 {
 		UI.deleteFields(e.target);
});
