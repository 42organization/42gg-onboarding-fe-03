import { useState, useEffect } from 'react';
import styles from '@/styles/todo.module.css';

function Todo() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    loadTodoList();
  }, []);

  const loadTodoList = () => {
    const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    setTodoItems(storedItems);
  };

  const saveTodoList = (items) => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  };

  const updateLocalStorage = () => {
    const todoItemList = [];
    const todoListItems = document.querySelectorAll('.text-block');

    todoListItems.forEach((item) => {
      todoItemList.push(item.innerHTML);
    });

    saveTodoList(todoItemList);
  };

  const appendTodoItem = (todoItem) => {
    const doList = document.getElementById('tolist');
    const toItem = document.createElement('li');
    toItem.className = 'tolist';

    const toCheckBox = document.createElement('input');
    toCheckBox.type = 'checkbox';

    toCheckBox.addEventListener('change', (e) => {
      const listItem = e.target.closest('li');
      const textBlock = listItem.querySelector('.text-block');
      textBlock.style.textDecoration = e.target.checked
        ? 'line-through'
        : 'none';
      updateLocalStorage();
    });

    const textBlock = document.createElement('span');
    textBlock.className = 'text-block';
    textBlock.innerHTML = ` &nbsp;&nbsp; ${todoItem}`;

    const changeBtn = document.createElement('span');
    changeBtn.className = 'changeBtn';
    changeBtn.innerHTML = ' change';
    changeBtn.addEventListener('click', () => {
      enableEditing(textBlock);
    });

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = ' ❌';
    deleteBtn.addEventListener('click', () => {
      toItem.remove();
      updateLocalStorage();
    });

    toItem.appendChild(toCheckBox);
    toItem.appendChild(deleteBtn);
    toItem.appendChild(changeBtn);
    toItem.appendChild(textBlock);
    doList.appendChild(toItem);
  };

  const enableEditing = (element) => {
    const oldValue = element.innerHTML;
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = oldValue;

    inputField.addEventListener('blur', () => {
      element.innerHTML = inputField.value;
      updateLocalStorage();
    });

    element.innerHTML = '';
    element.appendChild(inputField);
    inputField.focus();
  };

  const addBtn = () => {
    const toInput = document.getElementById('toinput');
    if (!toInput.value) {
      alert('Plz input value');
      return;
    }

    appendTodoItem(toInput.value);
    updateLocalStorage();
    toInput.value = '';
  };

  const convertToPNG = (element, filename) => {
    html2canvas(element).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${filename}.png`;
      link.click();
    });
  };

  const saveBtn = () => {
    const contentContainer = document.querySelector('.contentcontainer');
    const filename = 'contentcontainer_capture';

    convertToPNG(contentContainer, filename);
  };

  return (
    <div className={styles.allcontainer}>
      <div className={styles.contentcontainer}>
        <span className={styles.title}>TodoList</span>
        <button onClick={saveBtn} id='savebtn'>
          Save
        </button>
        <div className={styles.inputandlist}>
          <div className={styles.inputcontainer}>
            <input id='toinput' type='text' placeholder='New Task' size='40' />
            <button onClick={addBtn} className={styles.btn}>
              +
            </button>
          </div>
          <div className={styles.ulcontainer}>
            <ul className={styles.ullist} id='tolist'>
              {todoItems.map((item, index) => (
                <li className={`${styles.lilist} ${styles.tolist}`} key={index}>
                  <input type='checkbox' onChange={updateLocalStorage} />
                  <span
                    className={styles.deleteBtn}
                    onClick={updateLocalStorage}
                  >
                    {' '}
                    ❌
                  </span>
                  <span
                    className={styles.changeBtn}
                    onClick={updateLocalStorage}
                  >
                    {' '}
                    change
                  </span>
                  <span className='text-block'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
