export const shareActivity = (activity) => {
    if (navigator.share) {
      navigator.share({
        title: activity.title,
        text: `Scopri questa attività educativa: ${activity.title}`,
        url: window.location.href
      });
    } else {
      alert("Condivisione non supportata su questo dispositivo.");
    }
  };
  