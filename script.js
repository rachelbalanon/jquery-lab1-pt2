"use strict";

$(document).ready(() => {
    let table = null;
    let rsvp = null;
    // Changes opacity of tables 
    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).fadeTo(800, 0.2);
    });
    $(document).on("mouseleave", ".available", (event) => {
        $(event.target).fadeTo(800, 1);
    });
    // Shows form when a table is clicked and displays table number in form
    $(".available").on("click", () => {
        $(".form-container").show(300);

        table = $(event.target);
        $(".table-number").text();
        // console.log(event.target);
        if (event.target.tagName === "P") {
        $(".table-number").text(`Table Number: ${table.text()}`);
        } else {
            $(".table-number").text(`Table Number: ${table.text()}`);
        }
    });

    // Hides form with both x and save button. Changes tables to reserved.
    $(document).on("click", ".material-icons, .save-btn", (event) => {
        $(".form-container").hide(300);
        if ($(event.target).hasClass("save-btn")) {
            table.removeClass("available").addClass("reserved");
        }
    });

    $(document).on("click", ".available", (event) => {
        rsvp = $(event.target);
      console.log(rsvp);
    });

    $(document).on("click", "button", (event) => {
        rsvp
        .attr("name", $("input").eq(0).val())
        .attr("party-number", $("input").eq(2).val());

        $("input").each(function() {
            $(this).val("");
        });
    });

    $(document).on("mouseenter", ".reserved", (event) => {
        if ($(event.target).attr("name") && $(event.target).attr("party-number")){
            $(event.target).append(`
            <section class="reservation">
                Name: ${$(event.target).attr("name")}
                Size of party: ${$(event.target).attr("party-number")}
            </section>
            `);
        }
    });

    $(document).on("mouseleave", ".reserved", (event) => {
        $(".reservation").remove();
    });
    
    // Changes cursor when hover on reserved table
    // $(document).on("mouseenter", ".reserved", (event) => {
    //     $(event.target).css("cursor", "not-allowed");
    // });
    

    
});

