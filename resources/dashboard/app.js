// resources/dashboard/app.js - lightweight preview loader
(async function(){
  const preview = document.getElementById('preview-area');
  preview.textContent = 'Daftar sample CSV tersedia di resources/templates/csv/ — klik link di halaman untuk mengunduh.';

  // Try to fetch a small preview of Students.csv
  try{
    const res = await fetch('/resources/templates/csv/Students.csv');
    if(!res.ok) return;
    const txt = await res.text();
    const lines = txt.split('\n').slice(0,21).join('\n');
    preview.textContent = lines;
  }catch(e){
    console.warn('Preview load failed',e);
  }
})();
