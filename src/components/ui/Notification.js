import classes from './Notification.module.css';

export default function Notification (props) {
  let specialClasses = '';
  if(props.status == 'error'){
    specialClasses = classes.error; 
  }
  if(props.status == 'success'){
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  )

}