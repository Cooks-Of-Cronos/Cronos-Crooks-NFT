let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

var web3;
async function Connect(){
	await window.web3.currentProvider.enable();
	web3 = new web3(window.web3.currentProvider);

};


	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2022-7-09',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2022-12-01'
				},
				{
					title: 'Crooks x Crobadge NFT SALE',
					start: '2022-7-14',
					end: '2022-7-31'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2022-7-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2022-7-16T16:00:00'
				},
				{
					title: 'Cronosapien AMA',
          url: 'https://www.mona.gallery/spaces/M4aqIJ1QcNuo?invite=TnpVMk5EazU6YXNpYQ',
					start: '2022-7-12',
					end: '2022-7-12'
				},
				{
					title: 'Crooks AMA',
          url: 'https://www.mona.gallery/spaces/M4aqIJ1QcNuo?invite=TnpVMk5EazU6YXNpYQ',
					start: '2022-7-10',
					end: '2022-7-10'
				},
				{
					title: 'Croday AMA',
          url: 'https://www.mona.gallery/spaces/M4aqIJ1QcNuo?invite=TnpVMk5EazU6YXNpYQ',
					start: '2022-7-14'
				},
				{
					title: 'Meeting',
					start: '2022-7-12T14:30:00'
				},
				{
					title: 'Crook Snapshot',
					start: '2022-7-29'
				},
				{
					title: 'CroBadge Snapshot',
					start: '2022-7-31',
          end: '2022-7-31'


				},
				{
					title: 'CROOKS MINT end',
          title: 'CROOKS MINT end',

					start: '2022-8-1'
				},
				{
					title: 'Meta Monday',
					url: 'https://www.mona.gallery/spaces/M4aqIJ1QcNuo?invite=TnpVMk5EazU6YXNpYQ',
					start: '2022-7-25'
				}
			]
		});
		
	});
