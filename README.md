1. Написать функцию generateList(array)

принимает массив из чисел и массивов чисел, например [1,2,3]

нужно сгенерировать список из елементов,

<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>


[1,2, [1.1,1.2,1.3] ,3]

* а если в массиве встречается массив то делать вложенный список, для проверки на массив используйте Array.isArray()

<ul>
	<li>1</li>
	<li>2</li>
	<li>
		<ul>
			<li>1.1</li>
			<li>1.2</li>
			<li>1.3</li>
		</ul>
	</li>
	<li>3</li>
</ul>


2. Вывести таблицу 10 × 10, заполненную числами от 1 до 100
