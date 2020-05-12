import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsAction, postItemAction, deleteItemAction } from '../redux/actions/actions';

const ShoppingList = () => {
  const dispatch = useDispatch();

  const { items, loadding } = useSelector((store) => store.items);
  //   console.log(items);

  const [item, setItem] = useState('');

  useEffect(() => {
    dispatch(getItemsAction());
  }, [dispatch]);

  const onChangeItem = (e) => {
    setItem(e.target.value);
  };

  const handlerOnsubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name: item,
    };

    dispatch(postItemAction(newItem));
    //dispatch(getItemsAction());

    setItem('');
  };
  const dobleClickHandle = async (_id, e) => {
    console.log(_id);

    dispatch(deleteItemAction(_id));
    //e.preventDefault();

    //await dispatch(getItemsAction());
  };
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card card-body'>
            <h3>Create New Item</h3>
            <form onSubmit={handlerOnsubmit}>
              <div className='form-group'>
                <input type='text' className='form-control' value={item} onChange={onChangeItem} />
              </div>
              <button type='submit' className=' btn btn-dark form-control'>
                {' '}
                Save
              </button>
            </form>
          </div>
        </div>
        {loadding ? (
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        ) : (
          <div className='col-m-8 mt-2 align '>
            <ul className='list-group '>
              {items.map(({ name, _id }, index) => (
                <li
                  className='list-group-item list-group-item-action '
                  key={index}
                  onDoubleClick={(e) => dobleClickHandle(_id, e)}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShoppingList;
