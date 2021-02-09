$(document).ready(function () {
// NOTE:
// When "devour this" button is clicked, devoured is set to true 
// in db & burger is sent to the right side
    $(document).on('click', '.devourBtn', (e) => {
        const editUrl = `/devour/${e.target.getAttribute('data-id')}`;

        $.ajax({
            method: 'PUT',
            url: editUrl,
        }).then((response) => {
            location.reload();
        });
    });
});

// NOTE: 
// When a user submits to "add burger", a new burger should be added to the db
// and should be added to the list on selections on the left side


