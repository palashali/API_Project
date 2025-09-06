 fetch('https://randomuser.me/api/?results=100')
            .then(res => res.json())
            .then(data => displayUser(data.results))

        function displayUser(users) {
            const divId = document.getElementById("divId")
            for (const user of users) {
                const div = document.createElement('div')
                div.classList.add('user')
                div.innerHTML = `
                    <h1>${user?.name?.title}: ${user?.name?.first} ${user?.name?.last}</h1>
                    <p>Email: ${user?.email}</p>
                    <p>Phone: ${user?.phone}</p>
                    <p>Gender: ${user?.gender}</p>
                    <p>Location: ${user?.location?.state}</p>
                    <img src="${user?.picture?.large}">
                `
                divId.appendChild(div)
            }
        }
